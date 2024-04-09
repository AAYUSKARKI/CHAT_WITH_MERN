import  {configureStore} from '@reduxjs/toolkit'
import userreducer from './userslice'


const store = configureStore({
    reducer:{
user:userreducer
    }
})
export default store;