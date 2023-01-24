import React from 'react'
import Button from '../Button'
import styles from './Card.module.scss'

export default function Card({ title, price, storage, users, limit }) {
  return (
    <section className={styles.card}>
      <h2>{title}</h2>
      <p>${price}</p>
      <p>{storage} Storage</p>
      <p>{users} Users Allowed</p>
      <p>Send up to {limit} GB</p>
      <Button />
    </section>
  )
}
