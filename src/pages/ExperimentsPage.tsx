import React, { useEffect } from 'react';
import { DialogExperiments } from '../components/home/DialogExperiments';

export const ExperimentsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] pt-20">
      <DialogExperiments />
    </div>
  );
};