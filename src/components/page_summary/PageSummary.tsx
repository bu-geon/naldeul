import classNames from 'classnames/bind'

import styles from './pageSummary.module.scss'

const cx = classNames.bind(styles)

interface Props {
  category: '봉안당' | '수목장' | '공원묘지'
}

const DESCRIPTION = {
  봉안당: '그리움이 함께하는 공간',
  수목장: '자연속 고인의 안식처',
  공원묘지: '수려한 자연경관과 포근함을 느끼는 추모공간 ',
}

const PageSummary = ({ category }: Props) => {
  return (
    <div className={cx('wrapper')}>
      <p>{category}</p>
      <p>{DESCRIPTION[category]}</p>
    </div>
  )
}

export default PageSummary
