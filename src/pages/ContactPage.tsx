import React, { useEffect } from 'react';
import { DialogContact } from '../components/home/DialogContact';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] pt-20">
      <DialogContact />
    </div>
  );
};