import { FunctionComponent } from 'react'
import HomePage from './pages/home/home.page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.component'

// Components

const App: FunctionComponent = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/sign-up' element={<SignUpPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
