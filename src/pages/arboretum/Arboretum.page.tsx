import classNames from 'classnames/bind'

import styles from './arboretum.module.scss'
import { CATEGORY_MAP } from 'assets/datas/datas'

import ImageCard from 'components/image_card'
import PageSummary from 'components/page_summary'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const NORTHERN_ARBORETUMS_LIST = CATEGORY_MAP['수목장'].filter((el) => el.region === '경기 북부')
const SOUTHERN_ARBORETUMS_LIST = CATEGORY_MAP['수목장'].filter((el) => el.region === '경기 남부')

const ArboretumPage = () => {
  return (
    <>
      <PageSummary category='수목장' />
      <div>
        <p className={cx('locationTitle')}>경기 북부</p>
        <ul className={cx('listContainer')}>
          {NORTHERN_ARBORETUMS_LIST.map(({ name, region }) => (
            <li key={name}>
              <Link to={name} state={{ title: '수목장', region, name }}>
                <ImageCard name={name} category='수목장' region={region} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={cx('locationTitle')}>경기 남부</p>
        <ul className={cx('listContainer')}>
          {SOUTHERN_ARBORETUMS_LIST.map(({ name, region }) => (
            <li key={name}>
              <Link to={name} state={{ title: '수목장', region, name }}>
                <ImageCard name={name} category='수목장' region={region} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ArboretumPage
