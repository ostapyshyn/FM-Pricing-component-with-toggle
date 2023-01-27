import Button from '../Button'
import styles from './Card.module.scss'

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
  function getRadius() {
    if (isLeft) {
      return '10px 10px 0 0'
    } else if (isRight) {
      return '0 0 10px 10px'
    } else {
      return '10px'
    }
  }

  return (
    <section
      className={`${styles.card}${isPro ? '' : ` ${styles.empty}`}`}
      style={
        isPro && {
          background: 'linear-gradient(135deg, #a2a7f0 0%, #696edd 100%)',
          paddingBlock: '54.5px',
          borderRadius: getRadius(),
        }
      }>
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
