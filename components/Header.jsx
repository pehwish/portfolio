'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import UserIcon from '@/components/UserIcon';
import PagePadding from '@/components/PagePadding';
import { FaChromecast } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import Logo from './elements/Logo';
import Navigator from './elements/Navigator';
import { cn } from '@/lib/utils';

const HeaderDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className='w-[240px] h-full rounded-none'>
        <div className='py-3'>
          <div className='px-3'>
            <Logo isInDrawer onClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headerRef?.current?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    };

    headerRef?.current?.addEventListener('scroll', handleScroll);

    return () => {
      headerRef?.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className='relative overflow-y-auto w-full h-full'>
      <section className=' absolute top-0 w-full'>
        <div className='relative h-[400px] w-full'>
          <Image
            fill
            alt='mediaItem'
            className='object-cover'
            src='https://images.unsplash.com/photo-1724217552369-22b256e395d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <div className=' absolute h-[400px] top-0 bg-black opacity-40 w-full'></div>
          <div className=' absolute h-[400px] top-0 bg-gradient-to-t from-black w-full'></div>
        </div>
      </section>

      <section
        className={cn('sticky top-0 left-0 z-10', isScrolled && 'bg-black')}
      >
        <PagePadding>
          <div className='flex flex-row justify-between items-center h-[64px]'>
            <article className='flex-row hidden lg:flex items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500'>
              <div>
                <FiSearch size={24} />
              </div>
              <input
                type='text'
                className='h-full w-full bg-transparent'
                placeholder='노래, 앨범, 아티스트, 팟케스트 검색'
              />
            </article>
            <HeaderDrawer>
              <article className='lg:hidden'>
                <Logo />
              </article>
            </HeaderDrawer>
            <article className='flex flex-row gap-6 items-center'>
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className=' relative'>{children}</section>
    </header>
  );
};

export default Header;
