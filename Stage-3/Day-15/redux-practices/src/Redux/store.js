import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './Reducers/CounterSlice'


export const store = configureStore({
    reducer:{
        counter : CounterSlice,
    },
}) 
   