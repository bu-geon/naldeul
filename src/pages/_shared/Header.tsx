import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './header.module.scss'

const cx = classNames.bind(styles)

export const PAGES = {
  회사소개: { title: '회사소개', path: 'introduction' },
  봉안당: { title: '봉안당', path: 'charnel_house' },
  수목장: { title: '수목장', path: 'arboretum' },
  봉안묘: { title: '봉안묘', path: 'mausoleum' },
  상담신청: { title: '상담신청', path: 'consulting' },
}

const Header = () => {
  return (
    <header>
      <Link className={cx('logo')} to='/'>
        <h1>날들</h1>
      </Link>
      <nav>
        <ul>
          {Object.values(PAGES).map(({ title, path }) => (
            <li key={title}>
              <NavLink className={(isActive) => cx('nav', { isActive })} to={`${path}`}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
