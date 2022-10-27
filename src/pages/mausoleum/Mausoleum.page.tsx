import classNames from 'classnames/bind'

import styles from './mausoleum.module.scss'

import ImageCard from 'components/image_card'
import PageSummary from 'components/page_summary'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const MAUSOLEUMS_LIST = [
  {
    name: '전주 봉안묘',
  },
  {
    name: '고양 미묘 봉안묘',
  },
]

const MausoleumPage = () => {
  return (
    <>
      <PageSummary category='봉안묘' />
      <div>
        <ul className={cx('container')}>
          {MAUSOLEUMS_LIST.map(({ name }) => (
            <li key={name}>
              <Link to={name}>
                <ImageCard name={name} category='봉안묘' />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MausoleumPage
