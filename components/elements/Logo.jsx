'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import IconButton from './IconButton';
import { IoIosClose } from 'react-icons/io';

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter();

  const onClickLogo = () => {
    //홈으로 이동
    push('/');
  };

  const onClickMenu = () => {};

  return (
    <section className='flex flex-row itmes-center gap-3'>
      {isInDrawer ? (
        <IconButton
          onClickIcon={onClickClose}
          icon={<IoIosClose size='30' />}
        />
      ) : (
        <IconButton
          onClickIcon={onClickMenu}
          icon={<RxHamburgerMenu size='24' />}
        />
      )}

      <div className='cursor-pointer' onClick={onClickLogo}>
        <Image src='/main-logo.svg' width={100} alt='logo' height='30' />
      </div>
    </section>
  );
};

export default Logo;
