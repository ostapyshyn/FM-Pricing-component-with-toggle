import React from 'react'
import Button from '../Button'
import styles from './Card.module.scss'

export default function Card({ title, price, storage, users, limit, isPro }) {
  return (
    <section
      className={styles.card}
      style={isPro && { background: 'linear-gradient(135deg, #a2a7f0 0%, #696edd 100%)' }}>
      <h2 className={styles.title} style={isPro && { color: '#ffffff' }}>
        {title}
      </h2>
      <div className={styles.cost}>
        <span className={styles.dollar} style={isPro && { color: '#ffffff' }}>
          $
        </span>
        <p className={styles.price} style={isPro && { color: '#ffffff' }}>
          {price}
        </p>
      </div>

      <hr />
      <p className={styles.storage} style={isPro && { color: '#ffffff' }}>
        {storage} Storage
      </p>
      <hr />
      <p className={styles.storage} style={isPro && { color: '#ffffff' }}>
        {users} Users Allowed
      </p>
      <hr />
      <p className={styles.storage} style={isPro && { color: '#ffffff' }}>
        Send up to {limit} GB
      </p>
      <hr />
      <Button isPro={isPro} />
    </section>
  )
}
