import { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './carousel.module.scss'
import { ChevronLeft, ChevronRight } from 'assets/svgs'

const cx = classNames.bind(styles)

const IMAGES = [
  {
    id: 0,
    url: 'https://media.istockphoto.com/photos/paying-his-respects-picture-id627008872?k=20&m=627008872&s=612x612&w=0&h=dQAhwTq0tlIoGyH_YSdIQfjkUyEOKd9xldDpQyIX-68=',
  },
  {
    id: 1,
    url: 'https://www.bankrate.com/2021/07/12113209/Average-cost-funeral.jpg?auto=webp&optimize=high&crop=16:9',
  },
  {
    id: 2,
    url: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/28/2ae8d648-f313-4efc-8fe9-844b5c27358f.jpg',
  },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClickPreviousCarousel = () => {
    const isFirstCarousel = currentIndex === 0
    const carouselIndex = isFirstCarousel ? IMAGES.length - 1 : currentIndex - 1

    setCurrentIndex(carouselIndex)
  }
  const handleClickNextCarousel = () => {
    const isLastCarousel = currentIndex === IMAGES.length - 1
    const carouselIndex = isLastCarousel ? 0 : currentIndex + 1

    setCurrentIndex(carouselIndex)
  }

  return (
    <section>
      <ul className={cx('container')}>
        {IMAGES.map(({ id, url }) => (
          <li className={cx({ invisible: currentIndex !== id })} key={id}>
            <img className={cx('carouselItem')} src={url} alt='carousel' />
          </li>
        ))}
        <div className={cx('introduction')}>
          <p className={cx('contact')}>상담전화 070-4282-0882</p>
          <p className={cx('brandName')}>날들</p>
          <p className={cx('brandSummary')}>장례의 모든 것</p>
          <pre className={cx('description')}>
            고인의 마지막을 <br />
            정성껏 준비하겠습니다.
          </pre>
          <button className={cx('consultButton')} type='button'>
            상담 신청하기
          </button>
        </div>
        <button className={cx('direction', 'previousButton')} type='button'>
          <ChevronLeft width='40px' height='40px' onClick={handleClickPreviousCarousel} />
        </button>
        <button className={cx('direction', 'nextButton')} type='button'>
          <ChevronRight width='40px' height='40px' onClick={handleClickNextCarousel} />
        </button>
      </ul>
    </section>
  )
}

export default Carousel
