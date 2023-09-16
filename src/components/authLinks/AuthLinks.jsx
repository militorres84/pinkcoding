import React from 'react';
import styles from './authlinks.module.scss';
import Link from 'next/link';

const AuthLinks = () => {

  // future mili: this is TEMPORARY!!

  const status = "notauthenticated"
  return ( // it wasn't rendering the login link bc I'm a fkn stupid and forgot the parenthesis lol
    <>
    {status==="notauthenticated" ? (
      <Link href={"/login"}>Login</Link>
    ) : (
      <>
    <Link href={"/write"}>Write</Link>
    <span className={styles.link}>Logout</span>
    </>
    )}
    </>
  
)};

export default AuthLinks