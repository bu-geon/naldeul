import classNames from 'classnames/bind'
import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './category.module.scss'

const cx = classNames.bind(styles)

const CATEGORY_MAP = {
  공원묘지: [
    { name: '광주능평 공원묘원', region: '경기 남부' },
    { name: '광주매산 공원묘원', region: '경기 남부' },
    { name: '양평 공원묘원', region: '경기 남부' },
    { name: '양평 양수리 공원묘원', region: '경기 남부' },
    { name: '오포 공원묘원', region: '경기 남부' },
    { name: '용인 공원묘원', region: '경기 남부' },
    { name: '팔당 공원묘원', region: '경기 남부' },
    { name: '동두천 공원묘원', region: '경기 북부' },
    { name: '양주 공원묘원', region: '경기 북부' },
    { name: '일산 공원묘원', region: '경기 북부' },
    { name: '철원 공원묘원', region: '경기 북부' },
    { name: '포천 공원묘원', region: '경기 북부' },
  ],
}

interface Props {
  title: '공원묘지'
  description: string
}

const Category = ({ title, description }: Props) => {
  const [selectedRegion, setSelectedRegion] = useState('전체')

  const handleClickRegion = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedRegion(e.currentTarget.value)
  }

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
            <Link to='' key={name}>
              <li>
                <article className={cx('place')}>
                  <img src={`${process.env.PUBLIC_URL}imgs/${title}/${region}/${name}/main.jpg`} alt='' />
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
