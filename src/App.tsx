import { Routes, Route } from 'react-router-dom'
import Home from './modules/home/page/Home'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App