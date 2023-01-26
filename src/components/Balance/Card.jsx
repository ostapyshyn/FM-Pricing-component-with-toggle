import React from 'react'
import Button from '../Button'
import styles from './Card.module.scss'

export default function Card({ title, price, storage, users, limit, isPro, isLeft }) {
  const whiteColorStyle = {
    color: '#ffffff',
  }
  return (
    <section
      className={styles.card}
      style={
        (isPro && {
          background: 'linear-gradient(135deg, #a2a7f0 0%, #696edd 100%)',
          paddingBlock: '54.5px',
          borderRadius: '10px',
        },
        isLeft && {
          borderRadius: '10px 10px 0 0',
        })
      }>
      <h2 className={styles.title} style={isPro && whiteColorStyle}>
        {title}
      </h2>
      <div className={styles.cost}>
        <span className={styles.dollar} style={isPro && whiteColorStyle}>
          $
        </span>
        <p className={styles.price} style={isPro && whiteColorStyle}>
          {price}
        </p>
      </div>

      <hr />
      <p className={styles.storage} style={isPro && whiteColorStyle}>
        {storage} Storage
      </p>
      <hr />
      <p className={styles.storage} style={isPro && whiteColorStyle}>
        {users} Users Allowed
      </p>
      <hr />
      <p className={styles.storage} style={isPro && whiteColorStyle}>
        Send up to {limit} GB
      </p>
      <hr />
      <Button isPro={isPro} />
    </section>
  )
}
