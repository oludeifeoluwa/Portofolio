import React from 'react';
import { DialogHero } from '../components/home/DialogHero';
import { DialogProjects } from '../components/home/DialogProjects';
import { ExcelDashboardSection } from '../components/home/ExcelDashboardSection';
import { DialogResume } from '../components/home/DialogResume';
import { DialogCapabilities } from '../components/home/DialogCapabilities';
import { DialogExperiments } from '../components/home/DialogExperiments';
import { DialogAchievements } from '../components/home/DialogAchievements';
import { DialogTimeline } from '../components/home/DialogTimeline';
import { DialogAbout } from '../components/home/DialogAbout';
import { DialogContact } from '../components/home/DialogContact';

export const HomePage: React.FC = () => {
  return (
    <main className="bg-[#f7f7f7] dark:bg-[#0b0c0e] min-h-screen transition-colors duration-300">
      <DialogHero />
      <DialogProjects />
      <ExcelDashboardSection />
      <DialogResume />
      <DialogCapabilities />
      <DialogExperiments />
      <DialogAchievements />
      <DialogTimeline />
      <DialogAbout />
      <DialogContact />
    </main>
  );
};