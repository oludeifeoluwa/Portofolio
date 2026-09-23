import React, { useEffect } from 'react';
import { DialogProjects } from '../components/home/DialogProjects';

export const WorkPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] pt-20">
      <DialogProjects />
    </div>
  );
};