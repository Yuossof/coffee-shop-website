import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Story from './pages/Story.jsx'
import Visit from './pages/Visit.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/story" element={<Story />} />
      <Route path="/visit" element={<Visit />} />
    </Routes>
  )
}

export default App
