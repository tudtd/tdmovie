import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Search from './pages/Search/Search'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
