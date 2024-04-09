import {createSlice} from '@reduxjs/toolkit'


const usersllice =createSlice({
    name:'user',
    initialState:{
        authuser:null,
    },
    reducers:{
      setauthuser:(state,action)=>{
        state.authuser=action.payload;
      }
    }
})

export const {setauthuser} = usersllice.actions;
export default usersllice.reducer;
