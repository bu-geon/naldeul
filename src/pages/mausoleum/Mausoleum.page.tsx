import classNames from 'classnames/bind'

import styles from './mausoleum.module.scss'
import { CATEGORY_MAP } from 'assets/datas/datas'

import ImageCard from 'components/image_card'
import PageSummary from 'components/page_summary'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const NORTHERN_MAUSOLEUMS_LIST = CATEGORY_MAP.공원묘지.filter((el) => el.region === 'north')
const SOUTHERN_MAUSOLEUMS_LIST = CATEGORY_MAP.공원묘지.filter((el) => el.region === 'south')

const MausoleumPage = () => {
  return (
    <>
      <PageSummary category='공원묘지' />
      <div>
        <p className={cx('locationTitle')}>경기 북부</p>
        <ul className={cx('listContainer')}>
          {NORTHERN_MAUSOLEUMS_LIST.map(({ location, name, region }) => (
            <li key={name}>
              <Link to={name} state={{ location, title: '공원묘지', region, name }}>
                <ImageCard name={name} category='공원묘지' region={region} location={location} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={cx('locationTitle')}>경기 남부</p>
        <ul className={cx('listContainer')}>
          {SOUTHERN_MAUSOLEUMS_LIST.map(({ location, name, region }) => (
            <li key={name}>
              <Link to={name} state={{ location, title: '공원묘지', region, name }}>
                <ImageCard name={name} category='공원묘지' region={region} location={location} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MausoleumPage
