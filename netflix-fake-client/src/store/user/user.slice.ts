import { UserState, userAction } from './user.types';
import { createSlice } from "@reduxjs/toolkit";
import reducers from './user.reducers';


const initialState: UserState = {
  data: null
}

const userSlice = createSlice({
  name: 'user',           // Identificação dentro da store
  initialState,           // Dados importes normalizados, para não quebrar a aplicação
  reducers                // Receber e gravar/persistir dados
});


export const { reducer: userReducer, actions: userActions } = userSlice