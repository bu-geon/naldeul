import { MouseEvent, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames/bind'
import { useLocation } from 'react-router-dom'

import styles from './detail.module.scss'

const cx = classNames.bind(styles)

const Detail = () => {
  const { title, region, name } = useLocation().state
  const imageSrcs = Array.from({ length: 4 }, (_, i) => i + 1).map(
    (i) => `${process.env.PUBLIC_URL}/imgs/${title}/${region}/${name}/homepage${i}.jpg`
  )
  const [enlargedImageSrc, setEnlargedImageSrc] = useState(imageSrcs[0])

  const handleClickSubImage = (e: MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.value)
    setEnlargedImageSrc(imageSrcs[index])
  }

  const [featureList, setFeatureList] = useState([])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/imgs/${title}/${region}/${name}/features.json`)
      .then((res) => res.text())
      .then((json) => {
        const { features } = JSON.parse(json)
        setFeatureList(features)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <p>{name}</p>
      <div className={cx('container')}>
        <img className={cx('enlargeImage', 'fitImageSize')} src={enlargedImageSrc} alt='' />
        {imageSrcs.map((src, i) => (
          <button type='button' onClick={handleClickSubImage} value={i} key={src}>
            <img className={cx('fitImageSize')} src={src} alt='' />
          </button>
        ))}
      </div>
      <p>특징</p>
      <ul>
        {featureList.map(({ summary, description }) => (
          <li key={summary}>
            <p>{summary}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Detail
