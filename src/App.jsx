import { Route, Routes } from 'react-router-dom'
import CharacterPanel from "./pages/CharacterPanel.jsx";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CharacterPanel />}/>
    </Routes>
  )
}

export default App
