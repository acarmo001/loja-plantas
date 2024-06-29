import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

    name: "users",
    initialState: { value: [] },
    reducers: {
        loadUsers: (state, action) => {
            console.log("loadUsers", action);

            state.value = action.payload;
        },
        createUser: (state, action) => {
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter( user => user.id !== action.payload.id)
        }/*,
        updateUser: (state, action) => {
            state.value.map( user => {
                if(user.id === action.payload.id) {
                    user = action.payload;
                    
                }
                return user;
            })
        }*/
    }

});

export const { loadUsers, createUser, deleteUser } = userSlice.actions; 

export default userSlice.reducer;
