import Header from '../../components/header/header.component'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './login.styles'

const LoginPage = () => {
  return (
   <>
   <Header/>
    <LoginContainer>
      <LoginContent>
      <LoginHeadline>entre com a sua conta</LoginHeadline>
      {/* Button */}

      <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

      <LoginInputContainer>{/* Email Input */}</LoginInputContainer>
      <LoginInputContainer>{/* Password Input */}</LoginInputContainer>

      {/* Button */}
      </LoginContent>
    </LoginContainer>

   </>
  )
}

export default LoginPage