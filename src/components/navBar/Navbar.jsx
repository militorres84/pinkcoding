import React from 'react'
import styles from './navBar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.social}>
        <img src='./github.png' alt='github' width={24}/>
        <img src='./linkedin.png' alt='linkedin' width={24}/>
        <img src='./email.png' alt='email' width={24}/>
    </div>
    <div className={styles.logo}>
        <div>{"< We developing />"}</div>
    </div>
    <div className={styles.links}>
        <a href='/'>Homepage</a>
        <a href='/contact'>Contact</a>
        <a href='/about'>About us</a>
</div>
    </div>
  )
}

export default Navbar