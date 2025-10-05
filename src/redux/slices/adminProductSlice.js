import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

//? Async Thunk to fetch admin products
export const fetchAdminProducts = createAsyncThunk(
    "adminProducts/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/api/admin/products`, {
                headers: {
                    Authorization: USER_TOKEN,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

//? Async Thunk to create a new product
export const createProduct = createAsyncThunk(
    "adminProducts/createProduct",
    async (productData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/api/admin/products`, productData, {
                headers: {
                    Authorization: USER_TOKEN,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

//? Async Thunk to update a new product
export const updateProduct = createAsyncThunk(
    "adminProducts/updateProduct",
    async ({ id, productData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${API_URL}/api/admin/products/${id}`, productData, {
                headers: {
                    Authorization: USER_TOKEN,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

//? Async Thunk to delete a product
export const deleteProduct = createAsyncThunk(
    "adminProducts/deleteProduct",
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_URL}/api/admin/products/${id}`, {
                headers: {
                    Authorization: USER_TOKEN,
                },
            });
            return id;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const adminProductSlice = createSlice({
    name: "adminProducts",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //! fetch admin products
            .addCase(fetchAdminProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdminProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchAdminProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            //! create a new product
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            //! update a product
            .addCase(updateProduct.fulfilled, (state, action) => {
                const productIndex = state.products.findIndex(
                    (product) => product._id === action.payload._id,
                );
                if (productIndex !== -1) {
                    state.products[productIndex] = action.payload;
                }
            })
            //! delete a product
            .addCase(deleteProduct.fulfilled, (state, action) => {
                const deletedProductId = action.payload;
                state.products = state.products.filter(
                    (product) => product._id !== deletedProductId,
                );
            });
    },
});

export default adminProductSlice.reducer;
