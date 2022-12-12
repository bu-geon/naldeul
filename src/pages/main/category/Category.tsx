import classNames from 'classnames/bind'
import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './category.module.scss'
import { CATEGORY_MAP } from 'assets/datas/datas'

const cx = classNames.bind(styles)

interface Props {
  title: '공원묘지' | '납골당' | '수목장'
  description: string
}

const Category = ({ title, description }: Props) => {
  const [selectedRegion, setSelectedRegion] = useState('전체')

  const handleClickRegion = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedRegion(e.currentTarget.value)
  }

  const pathTo = { 공원묘지: 'mausoleum', 납골당: 'charnel_house', 수목장: 'arboretum' }[title]

  return (
    <section className={cx('container')}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className={cx('regionWrapper')}>
        <li className={cx('region', { isSelect: selectedRegion === '전체' })}>
          <button type='button' value='전체' onClick={handleClickRegion}>
            전체
          </button>
        </li>
        <li className={cx('region', { isSelect: selectedRegion === '경기 북부' })}>
          <button type='button' value='경기 북부' onClick={handleClickRegion}>
            경기 북부
          </button>
        </li>
        <li className={cx('region', { isSelect: selectedRegion === '경기 남부' })}>
          <button type='button' value='경기 남부' onClick={handleClickRegion}>
            경기 남부
          </button>
        </li>
      </ul>
      <ul>
        {CATEGORY_MAP[title]
          .filter(({ region }) => selectedRegion === '전체' || region === selectedRegion)
          .map(({ name, region }) => (
            <Link to={`${pathTo}/${name}`} state={{ title, region, name }} key={name}>
              <li>
                <article className={cx('place')}>
                  <img src={`${process.env.PUBLIC_URL}/imgs/${title}/${region}/${name}/main.jpg`} alt='' />
                  <p>{name}</p>
                </article>
              </li>
            </Link>
          ))}
      </ul>
    </section>
  )
}

export default Category
