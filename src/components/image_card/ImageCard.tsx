import classNames from 'classnames/bind'

import styles from './imageCard.module.scss'

const cx = classNames.bind(styles)

interface Props {
  location: string
  name: string
  category: '공원묘지' | '납골당' | '수목장'
  region: string
}

const ImageCard = ({ location, name, category, region }: Props) => {
  const pathTo = {
    공원묘지: 'cemetery_park',
    납골당: 'charnel_house',
    수목장: 'natural_burials',
  }[category]

  return (
    <article className={cx('imageCard')}>
      <div className={cx('frame')}>
        <img src={`${process.env.PUBLIC_URL}/imgs/${pathTo}/${region}/${location}/main.jpg`} alt={name} />
      </div>
      <p>{name}</p>
    </article>
  )
}

export default ImageCard
