import classNames from 'classnames/bind'

import styles from './arboretum.module.scss'

import ImageCard from 'components/image_card'
import PageSummary from 'components/page_summary'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const ARBORETUMS_LIST = [
  {
    name: '도봉산 수목장',
  },
  {
    name: '부산 현숙',
  },
  {
    name: '비바라비다 수목장',
  },
  {
    name: '수원 수목장',
  },
  {
    name: '하늘계단 수목장',
  },
]

const ArboretumPage = () => {
  return (
    <>
      <PageSummary category='수목장' />
      <div>
        <ul className={cx('container')}>
          {ARBORETUMS_LIST.map(({ name }) => (
            <li key={name}>
              <Link to={name}>
                <ImageCard name={name} category='수목장' />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ArboretumPage
