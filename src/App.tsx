import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'

import Header, { PAGES as pages } from 'pages/_shared/Header'
import Main from 'pages/main'
import Footer from 'pages/_shared/Footer'
import CharnelHousePage from 'pages/charnel_house'
import ArboretumPage from 'pages/arboretum'
import MausoleumPage from 'pages/mausoleum'
import Detail from 'pages/detailPage'
import ScrollToTop from 'components/scrollToTop'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <ScrollToTop />
        <Routes>
          <Route index element={<Main />} />
          <Route path={pages.회사소개.path} element={<h1>회사소개</h1>} />
          <Route path={pages.봉안당.path} element={<CharnelHousePage />} />
          <Route path='charnel_house/:charnelHouseName' element={<Detail />} />
          <Route path={pages.수목장.path} element={<ArboretumPage />} />
          <Route path='arboretum/:arboretumName' element={<Detail />} />
          <Route path={pages.봉안묘.path} element={<MausoleumPage />} />
          <Route path='mausoleum/:mausoleumName' element={<Detail />} />
          <Route path={pages.상담신청.path} element={<h1>상담신청</h1>} />
          <Route path='*' element={<div>잘못된 접근입니다.</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
