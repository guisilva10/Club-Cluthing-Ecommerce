import React, { FunctionComponent, useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import Header from '../components/header/header.component'
import Loading from '../components/loading/loading.component'
import { UserContext } from '../contexts/user.context'

interface children{
  children: React.ReactNode
}

const AuthenticationGuard: FunctionComponent<children> = ({ children }) => {
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(UserContext)

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
    <>
    <Header/>

    <Loading message='Você precisa estar logado para ter acesso a essa página. Você será redirecionado a página de login em alguns instantes'/>
    </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
