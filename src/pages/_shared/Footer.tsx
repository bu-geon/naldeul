import classNames from 'classnames/bind'
import { MouseEvent } from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from './footer.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 43.75em)' })

  const handleSubmitConsult = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <footer>
      {!isMobile && (
        <form action='' onSubmit={handleSubmitConsult}>
          <h3>상담</h3>
          <div className={cx('wrapper')}>
            <label className={cx('inputLabel')} htmlFor='nameField'>
              이름
            </label>
            <input
              className={cx('nameInput')}
              type='text'
              placeholder='이름'
              name='nameField'
              id='nameField'
              required
            />
          </div>
          <div className={cx('wrapper')}>
            <label className={cx('inputLabel')} htmlFor='contactField'>
              연락처
            </label>
            <input
              className={cx('contactInput')}
              type='text'
              placeholder='010-6428-1270'
              name='contactField'
              id='contactField'
              required
            />
          </div>
          <label htmlFor='a'>
            <input type='checkbox' name='' id='a' />
            개인정보 수집 이용 동의(필수)
          </label>
          <label htmlFor='b'>
            <input type='checkbox' name='' id='b' />
            마케팅 활용 동의(선택)
          </label>
          <button type='submit'>상담 신청</button>
        </form>
      )}
      {isMobile && (
        <div className={cx('mobile')}>
          <button className={cx('callButton')} type='button'>
            전화 연결
          </button>
          <button className={cx('consultButton')} type='button'>
            카카오톡 상담
          </button>
        </div>
      )}
    </footer>
  )
}

export default Footer
