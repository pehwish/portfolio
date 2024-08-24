import React, { ReactNode } from 'react';
import Header from '@/components/Header';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full w-full'>
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
