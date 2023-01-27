import React from 'react'
import ToggleSwitch from '../ToggleSwitch'
import styles from './Header.module.scss'

export default function Header({ title, onToggle, isToggled }) {
  return (
    <section className={styles.header}>
      <p className={styles.title}>{title}</p>
      <div className={styles.terms}>
        <span className={styles.term}>Annually</span>
        <ToggleSwitch onToggle={onToggle} isToggled={isToggled} />
        <span className={styles.term}>Monthly</span>
      </div>
    </section>
  )
}
