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
  납골당: [
    { name: '강화 봉안당', region: '경기 남부' },
    { name: '곤지암 봉안당', region: '경기 남부' },
    { name: '광주 불교 봉안당', region: '경기 남부' },
    { name: '기흥 봉안당', region: '경기 남부' },
    { name: '분당 봉안당', region: '경기 남부' },
    { name: '안성 봉안당', region: '경기 남부' },
    { name: '야탑 봉안당', region: '경기 남부' },
    { name: '오포 봉안당', region: '경기 남부' },
    { name: '용인 봉안당', region: '경기 남부' },
    { name: '의왕 봉안당', region: '경기 남부' },
    { name: '인천 불교 봉안당 A', region: '경기 남부' },
    { name: '인천 불교 봉안당 B', region: '경기 남부' },
    { name: '평택 봉안당', region: '경기 남부' },
    { name: '남양주 봉안당', region: '경기 북부' },
    { name: '동두천 기독교 봉안당', region: '경기 북부' },
    { name: '벽제 기독교 봉안당', region: '경기 북부' },
    { name: '벽제 봉안당 A', region: '경기 북부' },
    { name: '벽제 봉안당 B', region: '경기 북부' },
    { name: '벽제 봉안당 C', region: '경기 북부' },
    { name: '벽제 불교 봉안당', region: '경기 북부' },
    { name: '양주 봉안당', region: '경기 북부' },
    { name: '양평 봉안당', region: '경기 북부' },
    { name: '연천 봉안당', region: '경기 북부' },
    { name: '일산 봉안당 A', region: '경기 북부' },
    { name: '일산 봉안당 B', region: '경기 북부' },
    { name: '일산 불교 봉안당', region: '경기 북부' },
    { name: '통일로 봉안당', region: '경기 북부' },
    { name: '파주 봉안당', region: '경기 북부' },
    { name: '포천 불교 봉안당', region: '경기 북부' },
  ],
  수목장: [
    { name: '기흥 수목장', region: '경기 남부' },
    { name: '분당 수목장', region: '경기 남부' },
    { name: '서종 수목장', region: '경기 남부' },
    { name: '안성 수목장', region: '경기 남부' },
    { name: '양지 수목장', region: '경기 남부' },
    { name: '양평 수목장', region: '경기 남부' },
    { name: '용인 불교 수목장', region: '경기 남부' },
    { name: '용인 수목장', region: '경기 남부' },
    { name: '평택 수목장', region: '경기 남부' },
    { name: '김포 수목장', region: '경기 북부' },
    { name: '양주 수목장', region: '경기 북부' },
    { name: '연천 수목장', region: '경기 북부' },
    { name: '일산 수목장 A', region: '경기 북부' },
    { name: '일산 수목장 B', region: '경기 북부' },
    { name: '장흥 수목장', region: '경기 북부' },
    { name: '철원 수목장', region: '경기 북부' },
    { name: '포천 수목장', region: '경기 북부' },
  ],
}

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
