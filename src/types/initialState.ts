import IUser from './user'

export interface IInitialState {
  numOfCakes?: number
  numOfIceCreams?: number
}

export interface IInitialUserState {
  loading: boolean
  users: IUser[]
  error: string
}
