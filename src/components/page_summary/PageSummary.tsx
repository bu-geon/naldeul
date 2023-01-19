import classNames from 'classnames/bind'
import CallNumber from 'components/callNumber'

import styles from './pageSummary.module.scss'

const cx = classNames.bind(styles)

interface Props {
  category: '납골당' | '수목장' | '공원묘지'
}

const DESCRIPTION = {
  납골당: '그리움이 함께하는 공간',
  수목장: '자연속 고인의 안식처',
  공원묘지: '수려한 자연경관과 포근함을 느끼는 추모공간 ',
}

const PageSummary = ({ category }: Props) => {
  const background = { 납골당: 'charnel_house', 수목장: 'natural_burials', 공원묘지: 'cemetery_park' }[category]

  return (
    <div className={cx('wrapper', background)}>
      <CallNumber />
      <p className={styles.category}>{category}</p>
      <p className={styles.description}>{DESCRIPTION[category]}</p>
    </div>
  )
}

export default PageSummary
