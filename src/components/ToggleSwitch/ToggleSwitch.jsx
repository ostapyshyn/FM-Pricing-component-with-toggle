import React, { useState } from 'react'
import styles from './ToggleSwitch.module.scss'

function ToggleSwitch({ onToggle, isToggled }) {
  const onToggled = () => onToggle(!isToggled)

  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" checked={isToggled} onChange={onToggled} />
      <span className={styles.switch} />
    </label>
  )
}
export default ToggleSwitch
