
import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// utilities
import { auth } from '../../config/firebase.config'
import { CartContext } from '../../contexts/cart.context'
import { logoutUser } from '../../store/reducers/user/user.action'

// styles
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './header.styles'

const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector((rootReducer: any) => rootReducer.userReducer)

  const { productsCount, toggleCart } = useContext(CartContext)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleSignOutClick = () => {
    dispatch(logoutUser())
    signOut(auth)
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
       {!isAuthenticated && (
         <>
         <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
        </>
       )
       }
       {isAuthenticated && (
         <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
       )

       }
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25}/>
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
