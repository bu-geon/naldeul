import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main';

import Footer from './pages/_shared/Footer';
import Header from './pages/_shared/Header';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route index element={<Main />} />
					<Route path="*" element={<div>잘못된 접근입니다.</div>} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
