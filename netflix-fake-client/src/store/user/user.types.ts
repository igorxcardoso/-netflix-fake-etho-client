import { Action } from './../store/store.types';


export type User = {
  email: string,
  password: string
}

export type UserState = {
  data: User | null       // O data vai ter dois tipos null ou User
}

export type userAction = Action<User>;