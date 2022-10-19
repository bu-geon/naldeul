import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from 'pages/_shared/Header'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route index element={<h1>날들</h1>} />
          <Route path='*' element={<div>잘못된 접근입니다.</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
