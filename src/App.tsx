import { FunctionComponent } from 'react'
import HomePage from './pages/home/home.page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components

const App: FunctionComponent = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
