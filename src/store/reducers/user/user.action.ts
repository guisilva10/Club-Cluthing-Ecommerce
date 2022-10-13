import User from '../../../types/users.types'
import UserActionsTypes from './user.action-types'

export const loginUser = (payload: User) => ({
  type: UserActionsTypes.LOGIN,
  payload
})

export const logoutUser = () => ({
  type: UserActionsTypes.LOGOUT
})
