import React, { FunctionComponent } from 'react'

// Styles
import { InputErrorMessageContainer } from './input-error-message.styles'

interface InputErrorProps{
  children: React.ReactNode
}

const InputErrorMessage:FunctionComponent<InputErrorProps> = ({
  children
}) => {
  return <InputErrorMessageContainer> {children} </InputErrorMessageContainer>
}

export default InputErrorMessage
