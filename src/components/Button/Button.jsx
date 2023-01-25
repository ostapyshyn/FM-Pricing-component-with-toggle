import React from 'react'
import styles from './Button.module.scss'

export default function Button({ main, isPro }) {
  return (
    <button className={styles.button} style={isPro && { color: '#6D72DE', background: '#FFFFFF' }}>
      Learn more
    </button>
  )
}
