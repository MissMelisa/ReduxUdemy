import {configureStore} from '@reduxjs/toolkit'
import {counterSlices} from "../slices/slicesCounter"

export  const store=configureStore({
    reducer:{
       counter:counterSlices
    }
})