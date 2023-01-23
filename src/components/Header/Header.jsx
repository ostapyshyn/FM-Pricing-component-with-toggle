import React from 'react';
import styles from './Header.module.scss';

export default function Header({ title }) {
  return (
    <section>
      <p>{title}</p>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={(styles.slider, styles.round)}></span>
      </label>
    </section>
  );
}
