import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import {IInitialUserState} from '../../types/initialState'
import IUser from '../../types/user'

const initialState: IInitialUserState = {
  loading: false,
  users: [],
  error: '',
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data.map((user: IUser) => user)
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.loading = false
        state.users = action.payload
        state.error = ''
      },
    )
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error =
        action.error.message || 'Something went wrong. Please try again later.'
    })
  },
  reducers: {},
})

export default userSlice.reducer
