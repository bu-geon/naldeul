import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import styles from './header.module.scss'
import { MenuSvg, LogoIcon } from 'assets/svgs'
import { useState } from 'react'

const cx = classNames.bind(styles)

export const PAGES = {
  회사소개: { title: '회사소개', path: 'introduction' },
  봉안당: { title: '봉안당', path: 'charnel_house' },
  수목장: { title: '수목장', path: 'arboretum' },
  봉안묘: { title: '봉안묘', path: 'mausoleum' },
  상담신청: { title: '상담신청', path: 'consulting' },
}

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 43.75em)' })
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleClickMenu = () => {
    setToggleMenu((prev) => !prev)
  }

  const handleCloseMenu = () => {
    setToggleMenu(false)
  }

  return (
    <header className={cx('header')}>
      {isMobile && <MenuSvg className={cx('menu')} onClick={handleClickMenu} />}
      <Link to='/'>
        <LogoIcon className={cx('logo')} />
      </Link>
      <nav className={cx({ toggleMenu })}>
        <ul>
          {Object.values(PAGES).map(({ title, path }) => (
            <li key={title}>
              <NavLink className={(isActive) => cx('nav', { isActive })} to={`${path}`} onClick={handleCloseMenu}>
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
