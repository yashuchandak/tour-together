import { configureStore, createSlice } from "@reduxjs/toolkit";
const LoginSlice=createSlice({
    name:"signIn",
    initialState:{Id:-1,name:""},
    reducers:{
        login(state,action){
            state.Id=action.payload.Id;
            state.name=action.payload.name;
        },
        logOut(state){
            state.Id=-1;
            state.name="";
        }
    },
});

const Authactions=LoginSlice.actions;
const store=configureStore({
    reducer:LoginSlice.reducer,
});

export {Authactions,store};