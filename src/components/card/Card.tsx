import classNames from 'classnames/bind'

import styles from './card.module.scss'

const cx = classNames.bind(styles)

interface Props {
  title: string
  imageUrl: string
}

const Card = ({ title, imageUrl }: Props) => {
  return (
    <article>
      <img src={imageUrl} alt={title} />
      <div className={cx('infoContainer')}>
        <p className={cx('title')}>{title}</p>
        <p className={cx('summary')}>봉안 납골당은 어찌고 저찌고</p>
      </div>
    </article>
  )
}

export default Card
