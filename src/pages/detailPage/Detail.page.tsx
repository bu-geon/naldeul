import { MouseEvent, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { useLocation } from 'react-router-dom'

import styles from './detail.module.scss'

const cx = classNames.bind(styles)

interface Locations {
  location: string
  title: '공원묘지' | '납골당' | '수목장'
  region: 'north' | 'south'
  name: string
}

const Detail = () => {
  const { location, title, region, name }: Locations = useLocation().state
  const pathTo = { 공원묘지: 'cemetery_park', 납골당: 'charnel_house', 수목장: 'natural_burials' }[title]
  const imageSrcs = Array.from({ length: 4 }, (_, i) => i + 1).map(
    (i) => `${process.env.PUBLIC_URL}/imgs/${pathTo}/${region}/${location}/homepage${i}.jpg`
  )
  const [enlargedImageSrc, setEnlargedImageSrc] = useState(imageSrcs[0])

  const handleClickSubImage = (e: MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.value)
    setEnlargedImageSrc(imageSrcs[index])
  }

  const [featureList, setFeatureList] = useState([])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/imgs/${pathTo}/${region}/${location}/features.json`)
      .then((res) => res.text())
      .then((json) => {
        const { features } = JSON.parse(json)
        setFeatureList(features)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className={cx('container')}>
        <img className={cx('enlargeImage', 'fitImageSize')} src={enlargedImageSrc} alt='' />
        {imageSrcs.map((src, i) => (
          <button type='button' onClick={handleClickSubImage} value={i} key={src}>
            <img className={cx('fitImageSize')} src={src} alt='' />
          </button>
        ))}
      </div>
      <section className={cx('info')}>
        <p className={cx('name')}>{name}</p>
        <ul>
          {featureList.map(({ summary, description }, index) => (
            <li className={cx({ deepBackground: index % 2 })} key={summary}>
              <p className={cx('summary')}>{summary}</p>
              <p className={cx('description')}>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Detail
