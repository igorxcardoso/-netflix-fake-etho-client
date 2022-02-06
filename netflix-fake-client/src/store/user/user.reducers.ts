import { UserState, userAction } from './user.types';


const login = (state: UserState, action: userAction) => {
  state.data = action.payload
}

const reducers = { login }

export default reducers;