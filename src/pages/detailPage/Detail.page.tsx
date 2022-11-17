import { MouseEvent, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './detail.module.scss'

const cx = classNames.bind(styles)

const Detail = () => {
  const imageSrcs = [
    'https://image.zdnet.co.kr/2022/11/07/a259e975e5ec0bd00404f92616cd4b0b.jpg',
    'https://t1.daumcdn.net/cfile/tistory/99A96D3C5C0B933E24',
    'https://cdn.topstarnews.net/news/photo/201806/426674_75012_5845.gif',
    'https://yt3.ggpht.com/EyisSud0149H1ngDS40FGWUXvCcHmPukYi08wwEaD8LRnV-AZIPkuBgDy_dW8j8cX_3LxzJV=s900-c-k-c0x00ffffff-no-rj',
  ]
  const [enlargedImageSrc, setEnlargedImageSrc] = useState(imageSrcs[0])

  const handleClickSubImage = (e: MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.value)
    setEnlargedImageSrc(imageSrcs[index])
  }

  return (
    <>
      <h4>위치</h4>
      <div className={cx('container')}>
        <img className={cx('enlargeImage', 'fitImageSize')} src={enlargedImageSrc} alt='' />
        {imageSrcs.map((src, i) => (
          <button type='button' onClick={handleClickSubImage} value={i} key={src}>
            <img className={cx('fitImageSize')} src={imageSrcs[i]} alt='' />
          </button>
        ))}
      </div>
      <p>특징</p>
    </>
  )
}

export default Detail
