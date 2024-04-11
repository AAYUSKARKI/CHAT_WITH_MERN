import  {configureStore} from '@reduxjs/toolkit'
import userreducer from './userslice'
import messagereducer from './messageslice'
 

const store = configureStore({
    reducer:{
user:userreducer,
message:messagereducer
    }
})
export default store;