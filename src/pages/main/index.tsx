import Carousel from './carousel'
import Category from './category'
import Funeral from './funeral'

export interface CategoryType {
  title: '공원묘지' | '납골당' | '수목장'
  description: string
}

const CATEGORY_LIST: CategoryType[] = [
  { title: '공원묘지', description: '편안하게 고인을 모시는 곳' },
  { title: '납골당', description: '고인의 안식처' },
  { title: '수목장', description: '자연속 추모공간' },
]

const MainPage = () => {
  return (
    <>
      <Carousel />
      <Funeral />
      <ul>
        {CATEGORY_LIST.map(({ title, description }) => (
          <li key={title}>
            <Category title={title} description={description} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default MainPage
