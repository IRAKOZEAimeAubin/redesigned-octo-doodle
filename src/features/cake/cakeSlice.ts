import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {IInitialState} from '../../types/initialState'

const initialState: IInitialState = {
  numOfCakes: 10,
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction<number>) => {
      state.numOfCakes! -= action.payload
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes! += action.payload
    },
  },
})

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions
