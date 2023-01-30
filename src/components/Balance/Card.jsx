import Button from '../Button'
import styles from './Card.module.scss'
import clsx from 'clsx'

export default function Card({
  title,
  price,
  storage,
  users,
  limit,
  isPro,
  isLeft,
  isRight,
  isToggled,
}) {
  const whiteColorStyle = {
    color: '#ffffff',
  }

  return (
    <section
      className={clsx(styles.card, {
        [styles.pro]: isPro,
        [styles.left]: isLeft,
        [styles.right]: isRight,
      })}>
      <h2 className={styles.title} style={isPro && whiteColorStyle}>
        {title}
      </h2>
      <div className={styles.cost}>
        <span className={styles.dollar} style={isPro && whiteColorStyle}>
          $
        </span>
        <p className={styles.price} style={isPro && whiteColorStyle}>
          {isToggled ? price : (price * 10.0 + 0.09).toFixed(2)}
        </p>
      </div>
      <hr
        className={clsx(styles.hr, {
          [styles.line]: isPro,
        })}
      />
      <p className={styles.storage} style={isPro && whiteColorStyle}>
        {storage} Storage
      </p>
      <hr
        className={clsx(styles.hr, {
          [styles.line]: isPro,
        })}
      />
      <p className={styles.storage} style={isPro && whiteColorStyle}>
        {users} Users Allowed
      </p>
      <hr
        className={clsx(styles.hr, {
          [styles.line]: isPro,
        })}
      />
      <p className={styles.storage} style={isPro && whiteColorStyle}>
        Send up to {limit} GB
      </p>
      <hr
        className={clsx(styles.hr, {
          [styles.line]: isPro,
        })}
      />
      <Button isPro={isPro} />
    </section>
  )
}
