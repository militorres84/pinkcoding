import React from 'react'
import styles from './navBar.module.scss'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.social}>
        <img src='./github.png' alt='github' width={24}/>
        <img src='./linkedin.png' alt='linkedin' width={24}/>
        <img src='./email.png' alt='email' width={24}/>
    </div>
    <div className={styles.logo}>
        <div>{"<We developing/>"}</div>
    </div>
    <div className={styles.links}>
        <ThemeToggle/>
        <Link href={'/'}>Homepage</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/about'}>About</Link>
        <AuthLinks/>
</div>
    </div>
  )
}

export default Navbar