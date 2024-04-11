import {createSlice} from '@reduxjs/toolkit'


const usersllice =createSlice({
    name:'user',
    initialState:{
        authuser:null,
        otheruser:null,
        selecteduser:null
    },
    reducers:{
      setauthuser:(state,action)=>{
        state.authuser=action.payload;
      },
setotheruser:(state,action)=>{
  state.otheruser=action.payload;
},
setselecteduser:(state,action)=>{
state.selecteduser=action.payload;

}
    }
})

export const {setauthuser,setotheruser,setselecteduser} = usersllice.actions;
export default usersllice.reducer;
