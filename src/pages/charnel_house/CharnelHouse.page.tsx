import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './charnelHouse.module.scss'
import { CATEGORY_MAP } from 'assets/datas/datas'

import ImageCard from 'components/image_card'
import PageSummary from 'components/page_summary'

const cx = classNames.bind(styles)

const NORTHERN_CHARNEL_HOUSES_LIST = CATEGORY_MAP.납골당.filter((el) => el.region === 'north')
const SOUTHERN_CHARNEL_HOUSES_LIST = CATEGORY_MAP.납골당.filter((el) => el.region === 'south')

const CharnelHousePage = () => {
  return (
    <>
      <PageSummary category='납골당' />
      <div>
        <p className={cx('locationTitle')}>경기 북부</p>
        <ul className={cx('listContainer')}>
          {NORTHERN_CHARNEL_HOUSES_LIST.map(({ location, name, region }) => (
            <li key={name}>
              <Link to={name} state={{ location, title: '납골당', region, name }}>
                <ImageCard name={name} category='납골당' region={region} location={location} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={cx('locationTitle')}>경기 남부</p>
        <ul className={cx('listContainer')}>
          {SOUTHERN_CHARNEL_HOUSES_LIST.map(({ location, name, region }) => (
            <li key={name}>
              <Link to={name} state={{ location, title: '납골당', region, name }}>
                <ImageCard name={name} category='납골당' region={region} location={location} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CharnelHousePage
