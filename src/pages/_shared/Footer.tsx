import classNames from 'classnames/bind'

import styles from './footer.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer>
      <h3>상담</h3>
      <div className={cx('wrapper')}>
        <label className={cx('inputLabel')} htmlFor='nameField'>
          이름
        </label>
        <input className={cx('nameInput')} type='text' placeholder='이름' name='nameField' id='nameField' />
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
        />
      </div>
      <input type='checkbox' name='' id='a' />
      <label htmlFor='a'>개인정보 수집 이용 동의(필수)</label>
      <input type='checkbox' name='' id='b' />
      <label htmlFor='b'>마케팅 활용 동의(선택)</label>
      <button type='button'>상담 신청</button>
    </footer>
  )
}

export default Footer
