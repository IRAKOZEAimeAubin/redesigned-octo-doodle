import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import * as cakeActions from '../cake/cakeSlice'
import {IInitialState} from '../../types/initialState'

const initialState: IInitialState = {
  numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams! -= action.payload
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams! += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams!--
    })
  },
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions
