import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

export default function Button({ main, isPro }) {
  // const result = clsx({
  //   link: true,
  //   'link-primary': false,
  // })

  const style = clsx(styles.button, {
    [styles.pro]: isPro,
  })

  return <button className={style}>Learn more</button>
}
