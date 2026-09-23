import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';
import salesData from '../../data/excelSalesData.json';
import {
  Download,
  ExternalLink,
  Table,
  BarChart3,
  TrendingUp,
  Search,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  ShoppingCart,
  Star,
  CreditCard,
  Wallet,
  Banknote,
  RotateCcw,
  Maximize2,
  SlidersHorizontal,
  Package,
} from 'lucide-react';

const COLS = [
  'Invoice ID', 'Branch', 'City', 'Customer type', 'Gender',
  'Product line', 'Unit price', 'Qty', 'Tax 5%', 'Total',
  'Date', 'Time', 'Payment', 'COGS', 'Gross Margin%', 'Gross Income', 'Rating'
];

const fmt = (n: number) => {
  if (isNaN(n) || n === 0) return '$0';
  if (n >= 1000) return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return '$' + n.toFixed(2);
};

const fmtShort = (n: number) => {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(2) + 'M';
  if (n >= 1000) return '$' + (n / 1000).toFixed(1) + 'k';
  return '$' + n.toFixed(0);
};

export const ExcelDashboardSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'bi' | 'original' | 'grid'>('bi');

  const [customerType, setCustomerType] = useState<'All' | 'Member' | 'Normal'>('All');
  const [branch, setBranch] = useState<'All' | 'A' | 'B' | 'C'>('All');
  const [gender, setGender] = useState<'All' | 'Female' | 'Male'>('All');

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const PER_PAGE = 30;

  const filteredData = useMemo(() => {
    return salesData.rows.filter((row: (string | number)[]) => {
      const matchCust = customerType === 'All' || row[3] === customerType;
      const matchBranch = branch === 'All' || row[1] === branch;
      const matchGender = gender === 'All' || row[4] === gender;
      return matchCust && matchBranch && matchGender;
    });
  }, [customerType, branch, gender]);

  const dynamicKpis = useMemo(() => {
    let revenue = 0;
    let qty = 0;
    let profit = 0;
    let ratingSum = 0;

    filteredData.forEach((row: (string | number)[]) => {
      revenue += Number(row[9]) || 0;
      qty += Number(row[7]) || 0;
      profit += Number(row[15]) || 0;
      ratingSum += Number(row[16]) || 0;
    });

    const count = filteredData.length || 1;
    return {
      revenue,
      qty,
      profit,
      rating: (ratingSum / count).toFixed(2),
      transactions: filteredData.length,
    };
  }, [filteredData]);

  const paymentBreakdown = useMemo(() => {
    const counts: Record<string, number> = { Ewallet: 0, Cash: 0, 'Credit card': 0 };
    filteredData.forEach((row: (string | number)[]) => {
      const p = String(row[12]);
      if (counts[p] !== undefined) counts[p]++;
    });
    const total = filteredData.length || 1;
    return [
      { name: 'Ewallet', count: counts['Ewallet'], pct: Math.round((counts['Ewallet'] / total) * 100), color: '#002060' },
      { name: 'Cash', count: counts['Cash'], pct: Math.round((counts['Cash'] / total) * 100), color: '#3b82f6' },
      { name: 'Credit card', count: counts['Credit card'], pct: Math.round((counts['Credit card'] / total) * 100), color: '#93c5fd' },
    ];
  }, [filteredData]);

  const productRevenue = useMemo(() => {
    const map: Record<string, { total: number; female: number; male: number }> = {};
    const lines = [
      'Electronic accessories',
      'Fashion accessories',
      'Food and beverages',
      'Health and beauty',
      'Home and lifestyle',
      'Sports and travel',
    ];
    lines.forEach((l) => (map[l] = { total: 0, female: 0, male: 0 }));

    filteredData.forEach((row: (string | number)[]) => {
      const line = String(row[5]);
      const val = Number(row[9]) || 0;
      const gen = String(row[4]);
      if (map[line]) {
        map[line].total += val;
        if (gen === 'Female') map[line].female += val;
        if (gen === 'Male') map[line].male += val;
      }
    });

    return lines.map((l) => ({
      name: l,
      total: map[l].total,
      female: map[l].female,
      male: map[l].male,
    }));
  }, [filteredData]);

  const monthlyRevenue = useMemo(() => {
    const map: Record<string, number> = { Jan: 0, Feb: 0, Mar: 0 };
    filteredData.forEach((row: (string | number)[]) => {
      const d = String(row[10]);
      const val = Number(row[9]) || 0;
      if (d.startsWith('2019-01')) map['Jan'] += val;
      else if (d.startsWith('2019-02')) map['Feb'] += val;
      else if (d.startsWith('2019-03')) map['Mar'] += val;
    });
    return [
      { month: 'Jan', val: map['Jan'] },
      { month: 'Feb', val: map['Feb'] },
      { month: 'Mar', val: map['Mar'] },
    ];
  }, [filteredData]);

  const cityRevenue = useMemo(() => {
    const map: Record<string, number> = { Mandalay: 0, Naypyitaw: 0, Yangon: 0 };
    filteredData.forEach((row: (string | number)[]) => {
      const city = String(row[2]);
      const val = Number(row[9]) || 0;
      if (map[city] !== undefined) map[city] += val;
    });
    const maxVal = Math.max(...Object.values(map), 1);
    return [
      { city: 'Mandalay', val: map['Mandalay'], pct: (map['Mandalay'] / maxVal) * 100 },
      { city: 'Naypyitaw', val: map['Naypyitaw'], pct: (map['Naypyitaw'] / maxVal) * 100 },
      { city: 'Yangon', val: map['Yangon'], pct: (map['Yangon'] / maxVal) * 100 },
    ];
  }, [filteredData]);

  const tableRows = useMemo(() => {
    if (!search.trim()) return filteredData;
    const q = search.toLowerCase();
    return filteredData.filter((r: (string | number)[]) =>
      r.some((c) => String(c).toLowerCase().includes(q))
    );
  }, [filteredData, search]);

  const totalPages = Math.ceil(tableRows.length / PER_PAGE);
  const pagedRows = tableRows.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const resetSlicers = () => {
    setCustomerType('All');
    setBranch('All');
    setGender('All');
  };

  const hasFilters = customerType !== 'All' || branch !== 'All' || gender !== 'All';

  return (
    <section id="analytics" className="py-24 bg-[#f7f7f7] dark:bg-[#0b0c0e] relative transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="mb-3">
              <Badge variant="white">02 / EXCEL ANALYTICS & DASHBOARD ARCHITECTURE</Badge>
            </div>
            <h2
              className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] tracking-tight leading-[1.15]"
              style={{ fontSize: 'clamp(32px, 5vw, 50px)' }}
            >
              Supermarket Sales BI Dashboard.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="/assets/supermarket_sales.xlsx"
              download
              className="btn-tangerine inline-flex items-center gap-2 text-xs"
            >
              <Download size={13} />
              <span>Download .XLSX (439 KB)</span>
            </a>
            <a
              href="https://github.com/oludeifeoluwa/Excel-Dashboards"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-pill inline-flex items-center gap-1.5 text-xs"
            >
              <span>GitHub Repository</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex max-w-full items-center gap-1.5 overflow-x-auto bg-white dark:bg-[#16171f] border border-[#e5e5e5] dark:border-[#272835] p-1.5 rounded-full shadow-dialog-subtle">
            <button
              onClick={() => setViewMode('bi')}
              className={`shrink-0 whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                viewMode === 'bi'
                  ? 'bg-[#002060] text-white font-medium shadow-xs'
                  : 'text-[#636363] dark:text-[#94a3b8] hover:text-[#000000] dark:text-[#f8fafc]'
              }`}
            >
              Interactive BI Dashboard
            </button>
            <button
              onClick={() => setViewMode('original')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                viewMode === 'original'
                  ? 'bg-[#002060] text-white font-medium shadow-xs'
                  : 'text-[#636363] dark:text-[#94a3b8] hover:text-[#000000] dark:text-[#f8fafc]'
              }`}
            >
              Original Excel Screenshot
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#002060] text-white font-medium shadow-xs'
                  : 'text-[#636363] dark:text-[#94a3b8] hover:text-[#000000] dark:text-[#f8fafc]'
              }`}
            >
              Live 1,000-Row Sheet
            </button>
          </div>

          {hasFilters && (
            <button
              onClick={resetSlicers}
              className="inline-flex items-center gap-1.5 text-xs font-sans text-[#f69251] hover:underline cursor-pointer bg-white dark:bg-[#16171f] px-3 py-1.5 rounded-full border border-[#f69251]/30"
            >
              <RotateCcw size={12} />
              <span>Reset Slicers ({filteredData.length} records matching)</span>
            </button>
          )}
        </div>

        {viewMode === 'bi' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-[#16171f] rounded-[24px] border border-[#d1d5db] dark:border-[#272835] shadow-xl overflow-hidden"
          >
            <div className="bg-[#002060] px-6 py-4 flex items-center justify-between text-white border-b-4 border-[#001744]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white dark:bg-[#16171f]/10 flex items-center justify-center">
                  <ShoppingCart size={20} className="text-white" />
                </div>
                <h3 className="font-heading tracking-wider font-bold text-lg sm:text-2xl uppercase text-white">
                  SUPERMARKET SALES DASHBOARD
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-white/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>DYNAMIC EXCEL ENGINE</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-[#f0f4f8]/50 dark:bg-[#1f202b]/50 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                <div className="lg:col-span-3 bg-white dark:bg-[#16171f] rounded-[16px] border border-[#d1d5db] dark:border-[#272835] p-4 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#002060] dark:text-[#60a5fa] font-semibold tracking-wider">
                    <span>TOTAL QUANTITY OF PRODUCTS :</span>
                    <Package size={16} className="text-[#002060] dark:text-[#60a5fa]" />
                  </div>
                  <div className="my-2 text-right">
                    <span className="font-heading text-3xl sm:text-4xl text-[#002060] dark:text-[#60a5fa] font-bold">
                      {dynamicKpis.qty.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-[10px] text-[#64748b] dark:text-[#94a3b8] border-t border-[#f1f5f9] dark:border-[#1f202b] pt-1.5 flex justify-between">
                    <span>Units Dispatched</span>
                    <span>100% Tracked</span>
                  </div>
                </div>

                <div className="lg:col-span-3 bg-white dark:bg-[#16171f] rounded-[16px] border border-[#d1d5db] dark:border-[#272835] p-4 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#002060] dark:text-[#60a5fa] font-semibold tracking-wider">
                    <span>TOTAL REVENUE :</span>
                    <DollarSign size={16} className="text-[#002060] dark:text-[#60a5fa]" />
                  </div>
                  <div className="my-2 text-right">
                    <span className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#002060] dark:text-[#60a5fa] font-bold">
                      {fmt(dynamicKpis.revenue)}
                    </span>
                  </div>
                  <div className="text-[10px] text-[#64748b] dark:text-[#94a3b8] border-t border-[#f1f5f9] dark:border-[#1f202b] pt-1.5 flex justify-between">
                    <span>Gross Sales Value</span>
                    <span>3 Branches</span>
                  </div>
                </div>

                <div className="lg:col-span-3 bg-white dark:bg-[#16171f] rounded-[16px] border border-[#d1d5db] dark:border-[#272835] p-3 shadow-sm flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-[#64748b] dark:text-[#94a3b8] uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>EXCEL SLICERS</span>
                    <SlidersHorizontal size={11} className="text-[#002060] dark:text-[#60a5fa]" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-[10px] text-[#002060] dark:text-[#60a5fa] font-bold mb-1">Customer type</div>
                      <div className="grid grid-cols-3 gap-1">
                        {(['All', 'Member', 'Normal'] as const).map((c) => (
                          <button
                            key={c}
                            onClick={() => setCustomerType(c)}
                            className={`text-[10px] py-1 px-1 rounded text-center transition-colors cursor-pointer ${
                              customerType === c
                                ? 'bg-[#2563eb] text-white font-semibold shadow-xs'
                                : 'bg-[#e2e8f0] text-[#334155] dark:text-[#94a3b8] hover:bg-[#cbd5e1]'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-[#002060] dark:text-[#60a5fa] font-bold mb-1">Branch</div>
                      <div className="grid grid-cols-4 gap-1">
                        {(['All', 'A', 'B', 'C'] as const).map((b) => (
                          <button
                            key={b}
                            onClick={() => setBranch(b)}
                            className={`text-[10px] py-1 px-1 rounded text-center transition-colors cursor-pointer ${
                              branch === b
                                ? 'bg-[#2563eb] text-white font-semibold shadow-xs'
                                : 'bg-[#e2e8f0] text-[#334155] dark:text-[#94a3b8] hover:bg-[#cbd5e1]'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-[#002060] dark:text-[#60a5fa] font-bold mb-1">Gender</div>
                      <div className="grid grid-cols-3 gap-1">
                        {(['All', 'Female', 'Male'] as const).map((g) => (
                          <button
                            key={g}
                            onClick={() => setGender(g)}
                            className={`text-[10px] py-1 px-1 rounded text-center transition-colors cursor-pointer ${
                              gender === g
                                ? 'bg-[#2563eb] text-white font-semibold shadow-xs'
                                : 'bg-[#e2e8f0] text-[#334155] dark:text-[#94a3b8] hover:bg-[#cbd5e1]'
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 bg-white dark:bg-[#16171f] rounded-[16px] border border-[#d1d5db] dark:border-[#272835] p-4 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#002060] dark:text-[#60a5fa] font-semibold tracking-wider">
                    <span>TOTAL PROFIT:</span>
                    <TrendingUp size={16} className="text-[#2563eb]" />
                  </div>
                  <div className="my-2 text-right">
                    <span className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#002060] dark:text-[#60a5fa] font-bold">
                      {fmt(dynamicKpis.profit)}
                    </span>
                  </div>
                  <div className="text-[10px] text-[#64748b] dark:text-[#94a3b8] border-t border-[#f1f5f9] dark:border-[#1f202b] pt-1.5 flex justify-between">
                    <span>Avg Customer Rating</span>
                    <span className="font-bold text-[#002060] dark:text-[#60a5fa] flex items-center gap-1">{dynamicKpis.rating} / 10.0 <Star size={12} className="fill-[#002060] text-[#002060] dark:text-[#60a5fa]" /></span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-4 bg-white dark:bg-[#16171f] rounded-[16px] border border-[#d1d5db] dark:border-[#272835] p-5 shadow-sm flex flex-col">
                  <h4 className="font-heading text-center text-sm font-bold text-[#002060] dark:text-[#60a5fa] mb-4">
                    Payment option
                  </h4>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      <svg width="144" height="144" viewBox="0 0 144 144" className="rotate-[-90deg]">
                        {(() => {
                          const R = 54;
                          const C = 2 * Math.PI * R;
                          let acc = 0;
                          return paymentBreakdown.map((item) => {
                            const strokeDash = (item.pct / 100) * C;
                            const strokeOffset = -(acc / 100) * C;
                            acc += item.pct;
                            return (
                              <circle
                                key={item.name}
                                cx="72"
                                cy="72"
                                r={R}
                                fill="transparent"
                                stroke={item.color}
                                strokeWidth="28"
                                strokeDasharray={`${strokeDash} ${C}`}
                                strokeDashoffset={strokeOffset}
                                className="transition-all duration-700"
                              />
                            );
                          });
                        })()}
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-xs font-mono font-bold text-[#002060] dark:text-[#60a5fa]">
                          {dynamicKpis.transactions}
                        </span>
                        <span className="block text-[9px] text-[#64748b] dark:text-[#94a3b8]">Orders</span>
                      </div>
                    </div>

                    <div className="w-full mt-4 space-y-1.5">
                      {paymentBreakdown.map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }}></span>
                            <span className="text-[#334155] dark:text-[#94a3b8]">{item.name}</span>
                          </div>
                          <span className="font-mono font-semibold text-[#002060] dark:text-[#60a5fa]">
                            {item.pct}% ({item.count})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 bg-white dark:bg-[#16171f] rounded-[16px] border border-[#d1d5db] dark:border-[#272835] p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <h4 className="font-heading text-sm font-bold text-[#002060] dark:text-[#60a5fa]">
                      Total Revenue by Product
                    </h4>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm bg-[#002060]"></span>
                        <span className="text-[#334155] dark:text-[#94a3b8]">Female</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm bg-[#93c5fd]"></span>
                        <span className="text-[#334155] dark:text-[#94a3b8]">Male</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    {productRevenue.map((p) => {
                      const maxTotal = 60000;
                      const fPct = (p.female / maxTotal) * 100;
                      const mPct = (p.male / maxTotal) * 100;
                      return (
                        <div key={p.name} className="space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="font-medium text-[#1e293b]">{p.name}</span>
                            <span className="font-mono text-[#002060] dark:text-[#60a5fa] font-semibold">{fmt(p.total)}</span>
                          </div>
                          <div className="flex items-center gap-1 h-3.5">
                            <div
                              className="h-full bg-[#002060] rounded-sm transition-all duration-500"
                              style={{ width: `${fPct}%` }}
                              title={`Female: ${fmt(p.female)}`}
                            ></div>
                            <div
                              className="h-full bg-[#93c5fd] rounded-sm transition-all duration-500"
                              style={{ width: `${mPct}%` }}
                              title={`Male: ${fmt(p.male)}`}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-6 bg-white dark:bg-[#16171f] rounded-[16px] border border-[#d1d5db] dark:border-[#272835] p-5 shadow-sm">
                  <h4 className="font-heading text-sm font-bold text-[#002060] dark:text-[#60a5fa] mb-4 text-center">
                    Revenue By City
                  </h4>
                  <div className="flex items-end justify-around h-36 pt-4 border-b border-[#e2e8f0]">
                    {cityRevenue.map((c) => (
                      <div key={c.city} className="flex flex-col items-center gap-2 group w-20">
                        <span className="text-[10px] font-mono font-bold text-[#002060] dark:text-[#60a5fa]">
                          {fmtShort(c.val)}
                        </span>
                        <div
                          className="w-12 bg-gradient-to-t from-[#002060] to-[#2563eb] rounded-t-md transition-all duration-700 shadow-sm"
                          style={{ height: `${Math.max(c.pct, 10)}%` }}
                        ></div>
                        <span className="text-[11px] font-medium text-[#334155] dark:text-[#94a3b8]">{c.city}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 text-center text-[10px] font-mono text-[#64748b] dark:text-[#94a3b8]">
                    Branches: Mandalay (B) · Naypyitaw (C) · Yangon (A)
                  </div>
                </div>

                <div className="lg:col-span-6 bg-white dark:bg-[#16171f] rounded-[16px] border border-[#d1d5db] dark:border-[#272835] p-5 shadow-sm">
                  <h4 className="font-heading text-sm font-bold text-[#002060] dark:text-[#60a5fa] mb-4 text-center">
                    Revenue by Month
                  </h4>
                  <div className="h-36 flex flex-col justify-between pt-2">
                    <div className="relative h-28 w-full flex items-center justify-between px-6">
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                        <polyline
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="3"
                          points="60,20 180,80 320,35"
                          className="transition-all duration-700"
                        />
                      </svg>

                      {monthlyRevenue.map((m) => (
                        <div key={m.month} className="relative z-10 flex flex-col items-center">
                          <span className="text-[11px] font-mono font-bold text-[#002060] dark:text-[#60a5fa] mb-1">
                            {fmtShort(m.val)}
                          </span>
                          <span className="w-3.5 h-3.5 rounded-full bg-[#002060] border-2 border-white shadow-sm"></span>
                          <span className="text-xs font-semibold text-[#334155] dark:text-[#94a3b8] mt-2">{m.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2 text-center text-[10px] font-mono text-[#64748b] dark:text-[#94a3b8]">
                    Q1 2019 Monthly Performance Curve
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] px-6 py-3 border-t border-[#e2e8f0] flex flex-wrap items-center justify-between text-xs text-[#64748b] dark:text-[#94a3b8]">
              <span>Dataset: 1,000 Verified Transactions across Myanmar Retail Network</span>
              <span className="font-mono text-[#002060] dark:text-[#60a5fa]">Model: Normalized Sales Ledger + Power Slicers</span>
            </div>
          </motion.div>
        )}

        {viewMode === 'original' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-[#16171f] rounded-[24px] border border-[#d1d5db] dark:border-[#272835] p-6 shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9] dark:border-[#1f202b]">
              <div>
                <h4 className="font-heading text-lg font-bold text-[#000000] dark:text-[#f8fafc]">
                  Original Excel Workbook Blueprint
                </h4>
                <p className="text-xs font-sans text-[#636363] dark:text-[#94a3b8]">
                  Direct export from the original Microsoft Excel spreadsheet created for this dashboard project.
                </p>
              </div>
              <a
                href="/assets/excel-dashboard-original.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#2563eb] hover:underline"
              >
                <span>View Fullscreen</span>
                <Maximize2 size={12} />
              </a>
            </div>

            <div className="rounded-[16px] overflow-hidden border border-[#e2e8f0] shadow-md bg-white dark:bg-[#16171f]">
              <img
                src="/assets/excel-dashboard-original.png"
                alt="Supermarket Sales Dashboard Original Screenshot"
                className="w-full h-auto object-contain"
                style={{ imageRendering: 'auto' }}
              />
            </div>
          </motion.div>
        )}

        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#16171f] border border-[#e5e5e5] dark:border-[#272835] p-3 rounded-[16px] shadow-sm">
              <div className="flex items-center gap-2 flex-1 min-w-[240px]">
                <Search size={14} className="text-[#949494]" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Filter by invoice ID, branch, city, product line, payment..."
                  className="w-full bg-transparent text-xs font-sans text-[#181825] dark:text-[#e2e8f0] focus:outline-none placeholder:text-[#949494]"
                />
              </div>
              <div className="text-xs font-mono text-[#636363] dark:text-[#94a3b8]">
                Showing {pagedRows.length} of {tableRows.length} records (Page {page} of {totalPages || 1})
              </div>
            </div>

            <div className="bg-white dark:bg-[#16171f] rounded-[20px] border border-[#e5e5e5] dark:border-[#272835] overflow-hidden shadow-dialog-subtle">
              <div className="overflow-x-auto max-h-[560px]">
                <table className="w-full text-xs font-sans border-collapse">
                  <thead className="sticky top-0 z-10 bg-[#f8fafc] border-b border-[#e2e8f0]">
                    <tr>
                      <th className="px-3 py-2.5 text-center font-mono text-[10px] text-[#949494] bg-[#f1f5f9] dark:bg-[#1f202b] border-r border-[#e2e8f0] w-12">
                        #
                      </th>
                      {COLS.map((col) => (
                        <th
                          key={col}
                          className="px-4 py-2.5 text-left font-medium text-[#475569] dark:text-[#cbd5e1] whitespace-nowrap border-r border-[#f1f5f9] dark:border-[#1f202b] text-[11px]"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pagedRows.map((row: (string | number)[], idx: number) => {
                      const rowNum = (page - 1) * PER_PAGE + idx + 1;
                      return (
                        <tr
                          key={rowNum}
                          className={`border-b border-[#f1f5f9] dark:border-[#1f202b] hover:bg-[#f8fafc] transition-colors ${
                            idx % 2 === 0 ? 'bg-white dark:bg-[#16171f]' : 'bg-[#fafafa]'
                          }`}
                        >
                          <td className="px-3 py-2 text-center font-mono text-[10px] text-[#949494] bg-[#f8fafc] border-r border-[#e2e8f0]">
                            {rowNum}
                          </td>
                          {row.map((cell: string | number, cIdx: number) => (
                            <td
                              key={cIdx}
                              className="px-4 py-2 text-[#334155] dark:text-[#94a3b8] whitespace-nowrap border-r border-[#f8fafc] text-xs font-sans"
                            >
                              {cIdx === 1 ? (
                                <span className="px-2 py-0.5 rounded-full font-mono text-[10px] bg-[#eff6ff] text-[#1d4ed8] font-semibold">
                                  Branch {cell}
                                </span>
                              ) : cIdx === 9 || cIdx === 6 || cIdx === 8 || cIdx === 13 || cIdx === 15 ? (
                                <span className="font-mono text-[#0f172a] dark:text-[#e2e8f0] font-medium">
                                  ${Number(cell).toFixed(2)}
                                </span>
                              ) : cIdx === 16 ? (
                                <span className="font-mono text-[#f69251] font-bold flex items-center gap-1">
                                  {cell} <Star size={11} className="fill-[#f69251] text-[#f69251]" />
                                </span>
                              ) : (
                                String(cell)
                              )}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-3.5 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between">
                <span className="text-xs font-sans text-[#64748b] dark:text-[#94a3b8]">
                  Page {page} of {totalPages || 1}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-1.5 rounded-lg border border-[#cbd5e1] disabled:opacity-30 hover:bg-white dark:bg-[#16171f] transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages || totalPages === 0}
                    className="p-1.5 rounded-lg border border-[#cbd5e1] disabled:opacity-30 hover:bg-white dark:bg-[#16171f] transition-colors cursor-pointer"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
