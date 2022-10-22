import classNames from 'classnames/bind'

import styles from './footer.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer>
      <input type='text' placeholder='이름' />
      <input type='text' placeholder='010-6428-1270' />
      <button type='button'>상담 신청</button>
    </footer>
  )
}

export default Footer
