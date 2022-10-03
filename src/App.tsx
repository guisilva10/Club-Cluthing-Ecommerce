import { FunctionComponent, useContext, useState } from 'react'
import HomePage from './pages/home/home.page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.component'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'

// Components
import { UserContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConverter } from './converters/firestore.converters'
import Loading from './components/loading/loading.component'
import ExplorePage from './pages/explore/explore.page'
import CategoryDetailPage from './pages/category-details/category-details.page'
import Cart from './components/cart/cart.component'
import CheckoutPage from './pages/checkout/checkout.page'
import AuthenticationGuard from './guards/authentication.guards'
import PaymentConfirmationPage from './pages/payment-confirmation/payment-confirmation.page'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSignInOut = isAuthenticated && !user
    if (isSignInOut) {
      logoutUser()
      return setIsInitializing(false)
    }

    const isSigningIn = !isAuthenticated && user
    if (isSigningIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users').withConverter(userConverter), where('id', '==', user.uid))
      )
      const userFromFirestore = querySnapshot.docs[0]?.data()

      loginUser(userFromFirestore)

      return setIsInitializing(false)
    }
    return setIsInitializing(false)
  })
  if (isInitializing) return <Loading/>
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/explore' element={<ExplorePage/>}/>
    <Route path='/category/:id' element={<CategoryDetailPage/>}/>
    <Route path='/payment-confirmation' element={<PaymentConfirmationPage/>}/>
    <Route path='/checkout' element={
      <AuthenticationGuard>
        <CheckoutPage/>
      </AuthenticationGuard>
    }/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/sign-up' element={<SignUpPage/>}/>
   </Routes>
   <Cart />
   </BrowserRouter>
  )
}

export default App
