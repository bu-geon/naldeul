import classNames from 'classnames/bind'

import styles from './pageSummary.module.scss'

const cx = classNames.bind(styles)

interface Props {
  category: string
}

const PageSummary = ({ category }: Props) => {
  return (
    <div className={cx('wrapper')}>
      <p>{category}</p>
      <p>어민ㅇ라ㅓㄴㅁ ㄹㅁㄴ아ㅣ럼ㄴ</p>
    </div>
  )
}

export default PageSummary
