import styles from './afterPay.module.scss'

import AfterPayPoster1 from 'assets/imgs/afterPay1.png'
import AfterPayPoster2 from 'assets/imgs/afterPay2.png'

const AfterPay = () => {
  return (
    <>
      <img className={styles.poster} src={AfterPayPoster1} alt='' />
      <img className={styles.poster} src={AfterPayPoster2} alt='' />
    </>
  )
}

export default AfterPay
