import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './category.module.scss'

import Card from 'components/card/Card'

const cx = classNames.bind(styles)

const CATEGORIES = [
  {
    title: '봉안(납골)당',
    path: 'charnel_house',
    imageUrl: 'https://www.100ssd.co.kr/news/photo/202206/88166_68319_1116.jpg',
  },
  {
    title: '수목장(자연&평장)',
    path: 'arboretum',
    imageUrl: 'http://image.auction.co.kr/itemimage/1f/da/62/1fda62fb76.jpg',
  },
  {
    title: '봉안(납골)묘',
    path: 'mausoleum',
    imageUrl:
      'https://w.namu.la/s/fd8994ca9ac1649bb20af5246ca15ed7a2414d398dedc49231eba7123213e295c45f6f787b33640dd6d424154f1820e5360f92be12c9fcb830c80c2b6e092e8682b8a14398332cdf5e6c4d1bd59ed3366ed8caf4a13d0eb7a14b55e11e9b3bde',
  },
]

const Category = () => {
  return (
    <section>
      <ul className={cx('categories')}>
        {CATEGORIES.map(({ title, path, imageUrl }) => (
          <li key={title}>
            <Link to={path}>
              <Card title={title} imageUrl={imageUrl} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Category
