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
import AfterPay from 'pages/afterPay'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <ScrollToTop />
        <Routes>
          <Route index element={<Main />} />
          <Route path={pages.납골당.path} element={<CharnelHousePage />} />
          <Route path='charnel_house/:charnelHouse_name' element={<Detail />} />
          <Route path={pages.수목장.path} element={<ArboretumPage />} />
          <Route path='natural_burials/:natural_burial_name' element={<Detail />} />
          <Route path={pages.공원묘지.path} element={<MausoleumPage />} />
          <Route path='cemetery_park/:cemetery_park_name' element={<Detail />} />
          <Route path={pages.후불제상조.path} element={<AfterPay />} />
          <Route path={pages['개장&이장'].path} element={<h1>개장&이장</h1>} />
          <Route path='*' element={<div>잘못된 접근입니다.</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
