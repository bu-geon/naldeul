import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'

import Header, { PAGES as pages } from 'pages/_shared/Header'
import Main from 'pages/main'
import Footer from 'pages/_shared/Footer'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Routes>
          <Route index element={<Main />} />
          <Route path={pages.회사소개.path} element={<h1>회사소개</h1>} />
          <Route path={pages.봉안당.path} element={<h1>봉안당</h1>} />
          <Route path={pages.수목장.path} element={<h1>수목장</h1>} />
          <Route path={pages.봉안묘.path} element={<h1>봉안묘</h1>} />
          <Route path={pages.상담신청.path} element={<h1>상담신청</h1>} />
          <Route path='*' element={<div>잘못된 접근입니다.</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
