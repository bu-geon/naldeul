import classNames from 'classnames/bind'

import styles from './Header.module.scss'

import { NavLink } from 'react-router-dom'

const cx = classNames.bind(styles)

const MENUS = [
  { title: '회사소개', to: 'introduction' },
  { title: '봉안(납골)당', to: '' },
  { title: '수목장(자연 및 평장)', to: '' },
  { title: '봉안(납골)묘', to: '' },
  { title: '상담신청', to: 'consultation' },
]

const Header = () => {
  return (
    <header>
      <h1>날들</h1>
      <nav>
        <ul>
          {MENUS.map(({ title, to }) => (
            <li key={title}>
              <NavLink className={(isActive) => cx('nav', { isActive })} to={`/${to}`}>
                {/* <NavLink className={styles.nav} to={`/${to}`}> */}
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
