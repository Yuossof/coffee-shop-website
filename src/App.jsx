import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Story from './pages/Story.jsx'
import Visit from './pages/Visit.jsx'
import Gallery from './pages/Gallery.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/story" element={<Story />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  )
}

export default App
