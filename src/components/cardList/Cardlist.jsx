import React from 'react'
import styles from './cardlist.module.scss'
import Pagination from '../pagination/Pagination'

const Cardlist = () => {
  return (
    <div className={styles.container}>Cardlist
    <Pagination/>
    </div>
  )
}

export default Cardlist