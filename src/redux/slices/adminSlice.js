import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//? fetch all users (admin only)
export const fetchUsers = createAsyncThunk("admin/fetchUsers", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

//? add the create user action:
export const addUser = createAsyncThunk("admin/addUser", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
            userData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
            },
        );
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

//? update user info:
export const updateUser = createAsyncThunk(
    "admin/updateUser",
    async ({ id, name, email, role }, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
                {
                    name,
                    email,
                    role,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                },
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

//? delete a user:
export const deleteUser = createAsyncThunk("admin/deleteUser", async (id, { rejectWithValue }) => {
    try {
        const res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
        });
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //! fetch users
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            //! updated user
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;

                const updatedUser = action.payload;
                const userIndex = state.users.findIndex((user) => user._id === updatedUser._id);
                if (userIndex !== -1) {
                    state.users[userIndex] = updatedUser;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            //! delete user
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user._id !== action.payload);
            })
            //! add user
            .addCase(addUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload.user);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
});

export default adminSlice.reducer;
