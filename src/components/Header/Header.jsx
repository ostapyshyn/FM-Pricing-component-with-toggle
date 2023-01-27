import React from 'react'
import ToggleSwitch from '../ToggleSwitch'
import styles from './Header.module.scss'

export default function Header({ title }) {
  return (
    <section className={styles.header}>
      <p className={styles.title}>{title}</p>
      <ToggleSwitch />
    </section>
  )
}
