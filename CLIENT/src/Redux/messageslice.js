import {createSlice} from '@reduxjs/toolkit'

const messagelice =createSlice({
    name:'message',
    initialState:{
       messages:[]
    },
    reducers:{
      setmessages:(state,action)=>{
        state.messages=action.payload;
      }
    }
})

export const {setmessages} = messagelice.actions;
export default messagelice.reducer;
