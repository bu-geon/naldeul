import classNames from 'classnames/bind'

import styles from './funeral.module.scss'

const cx = classNames.bind(styles)

const Funeral = () => {
  return (
    <section className={cx('services')}>
      <h2>장례토탈서비스 날들</h2>
      <p>추천 장례 서비스</p>
      <div className={cx('container')}>
        <article className={cx('service')}>
          <img
            className={cx('funeralImage')}
            src='https://media.wired.com/photos/5e18de111a8a5c00095b99bd/master/w_2560%2Cc_limit/Biz-funeral-599400895.jpg'
            alt='공원묘지'
          />
          <dl>
            <dt>공원묘지</dt>
            <dd>추가 멘트 또는 설명</dd>
          </dl>
        </article>
        <article className={cx('service')}>
          <img
            className={cx('funeralImage')}
            src='https://cdn.vox-cdn.com/thumbor/pDQLNuvoE4vbVynapa0k6t3N2DU=/0x0:3997x2664/1200x800/filters:focal(1651x1092:2289x1730)/cdn.vox-cdn.com/uploads/chorus_image/image/71370333/GettyImages_1423635283d.0.jpg'
            alt='개장 또는 이장'
          />
          <dl>
            <dt>개장 & 이장</dt>
            <dd>추가 멘트 또는 설명</dd>
          </dl>
        </article>
      </div>
    </section>
  )
}

export default Funeral
