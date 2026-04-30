"use client";

import React, {useState} from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { styles } from '../styles'; 
import {logo} from '../assets'
import LanguageSelector from './LanguageSelector';

const Navbar = ({ navLinks, roleLabel, currentLang, languageLabel, localeNames }) => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className='fixed inset-x-0 top-5 z-20 px-6 sm:px-16'>
            <div className='relative mx-auto w-full max-w-7xl'>
                <div className='pointer-events-none absolute inset-0 overflow-hidden rounded-[24px] bg-[linear-gradient(145deg,rgba(18,26,42,0.48),rgba(10,16,29,0.7))] shadow-[0_24px_80px_-35px_rgba(0,0,0,0.8)] backdrop-blur-xl'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(145,94,255,0.08),transparent_28%),radial-gradient(circle_at_right,rgba(0,206,168,0.06),transparent_24%)]' />
                </div>
                <div className='relative flex w-full items-center justify-between px-6 py-4'>
                <a
                    href='#'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
                    <p className='text-white font-bold cursor-pointer flex'>Kerim &nbsp;
                        <span className='sm:block hidden'>|&nbsp; {roleLabel}</span>
                    </p>
                </a>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {
                        navLinks.map(link => (
                            <li
                                key={link.id}
                                className={`${active == link.title
                                    ? 'text-white'
                                    : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => setActive(link.title)}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='hidden sm:block'>
                    <LanguageSelector
                        currentLang={currentLang}
                        label={languageLabel}
                        localeNames={localeNames}
                    />
                </div>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <button
                        type='button'
                        aria-label={toggle ? 'Close menu' : 'Open menu'}
                        className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:bg-white/10'
                        onClick={() => setToggle(!toggle)}>
                        {toggle ? <FaXmark className='h-5 w-5' /> : <FaBars className='h-5 w-5' />}
                    </button>
                    <div
                        className={`${toggle
                            ? 'flex'
                            : 'hidden'} absolute top-20 right-0 z-10 mx-4 my-2 min-w-[240px] flex-col gap-4 rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(18,26,42,0.78),rgba(10,16,29,0.62))] p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl`}>
                        <LanguageSelector
                            currentLang={currentLang}
                            label={languageLabel}
                            localeNames={localeNames}
                        />
                        <ul className='list-none flex flex-col gap-4 justify-end items-start'>
                            {
                                navLinks.map(link => (
                                    <li
                                        key={link.id}
                                        className={`${active == link.title
                                            ? 'text-white'
                                            : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer font-poppins text-[16px]`}
                                        onClick={() => {
                                            setToggle(!toggle)
                                            setActive(link.title)
                                        }}>
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar