import React from 'react';

export default function Card({ title, price, storage, users, limit }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{storage}</p>
      <p>{users}</p>
      <p>{limit}</p>
    </section>
  );
}
