import React from 'react';
import Button from '../Button';

export default function Card({ title, price, storage, users, limit }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{storage}</p>
      <p>{users}</p>
      <p>{limit}</p>
      <Button />
    </section>
  );
}
