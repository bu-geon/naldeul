import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './charnelHouse.module.scss'

import ImageCard from 'components/image_card'
import PageSummary from 'components/page_summary'

const cx = classNames.bind(styles)

const CHARNEL_HOUSES_LIST = [
  {
    name: '양주 봉안당',
  },
  {
    name: '서울 홀리',
  },
  {
    name: '대구 세인트',
  },
  {
    name: '청양 영철',
  },
]

const CharnelHousePage = () => {
  return (
    <>
      <PageSummary category='봉안당' />
      <div>
        <ul className={cx('container')}>
          {CHARNEL_HOUSES_LIST.map(({ name }) => (
            <li key={name}>
              <Link to={name}>
                <ImageCard name={name} category='봉안당' />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CharnelHousePage
