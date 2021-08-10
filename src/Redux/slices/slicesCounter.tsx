import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment= createAction("increment/counter")
export const decrement= createAction("decrement/counter")
export const increaseAmount= createAction("increase/counter")

const initialState={
    value:0
}

// export const counterSlice=createSlice({
//     name:'counter', initialState,
//     reducers:{
//         increment:(state)=>{
//             state.value +=1
//         },
//         decrement:(state)=>{
//             state.value -=
//         }

//     }
// })
export const counterSlices= createReducer(initialState,builder =>{builder.addCase(increment, (state,action)=>{
    state.value++
})
builder.addCase(decrement, (state,action)=>{
    state.value--
})
builder.addCase(increaseAmount,(state,action:any)=>{
    state.value += action.payload
})})





