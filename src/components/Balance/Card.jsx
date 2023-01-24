import React from 'react'
import Button from '../Button'
import styles from './Card.module.scss'

export default function Card({ title, price, storage, users, limit }) {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cost}>
        <span className={styles.dollar}>$</span>
        <p className={styles.price}>{price}</p>
      </div>

      <hr />
      <p className={styles.storage}>{storage} Storage</p>
      <hr />
      <p className={styles.storage}>{users} Users Allowed</p>
      <hr />
      <p className={styles.storage}>Send up to {limit} GB</p>
      <hr />
      <Button />
    </section>
  )
}
