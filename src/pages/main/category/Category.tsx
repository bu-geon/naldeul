import classNames from 'classnames/bind'

import styles from './category.module.scss'

const cx = classNames.bind(styles)

const CATEGORY_MAP = {
  납골당: ['남양주 납골당', '분당 납골당', '양주 납골당', '일산 납골당', '전주 납골당', '대구 납골당'],
  수목장: ['남양주 수목장', '분당 수목장', '양주 수목장', '일산 수목장'],
  공원묘지: ['남양주 공원묘지', '분당 공원묘지', '양주 공원묘지', '일산 공원묘지'],
}

interface Props {
  title: '납골당' | '수목장' | '공원묘지'
  description: string
}

const Category = ({ title, description }: Props) => {
  return (
    <section className={cx('container')}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {CATEGORY_MAP[title].map((place) => (
          <li key={place}>
            <article className={cx('place')}>
              <img src='https://i.ytimg.com/vi/STTEIUrP9y8/maxresdefault.jpg' alt='' />
              <p>{place}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Category
