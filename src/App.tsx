import { FunctionComponent } from 'react'
import HomePage from './pages/home/home.page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/login.page'

// Components

const App: FunctionComponent = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
