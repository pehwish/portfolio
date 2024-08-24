import { sleep } from '@/lib/utils';
import React from 'react';

const page = () => {
  // await sleep(2000);

  // throw new Error('my error');
  return (
    <div className='min-h-[600px]'>
      <div className='h-[500px] bg-neutral-700'>Home Page</div>
      <div className='h-[500px] bg-neutral-700'>Home Page</div>
      <div className='h-[500px] bg-neutral-700'>Home Page</div>
      <div className='h-[500px] bg-neutral-700'>Home Page</div>
    </div>
  );
};

export default page;
