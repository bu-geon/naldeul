import classNames from 'classnames/bind'

import styles from './imageCard.module.scss'

const cx = classNames.bind(styles)

interface Props {
  name: string
  category: string
  region: string
}

const ImageCard = ({ name, category, region }: Props) => {
  return (
    <article className={cx('imageCard')}>
      <div className={cx('frame')}>
        <img src={`${process.env.PUBLIC_URL}/imgs/${category}/${region}/${name}/main.jpg`} alt='' />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </article>
  )
}

export default ImageCard
