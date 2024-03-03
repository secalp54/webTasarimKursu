import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    arttir(state){
         state.value+=1;
    },
    azalt(state){
        state.value-=1;
    }
  },
})
export const {arttir,azalt} = countSlice.actions

export default countSlice.reducer