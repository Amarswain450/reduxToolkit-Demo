import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const initialState = {
    data: [],
    status: STATUSES.IDLE
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // setProducts: (state, action) => {
    //     state.data = action.payload;
    // },
    // setStatus: (state, action) => {
    //     state.status = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
    }).addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
    }).addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
    })
  }
});


export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

//Thunk
// export const fetchProducts = () => {
//     return async (dispatch, getState) => {
//         dispatch(setStatus(STATUSES.LOADING));
//         try{
//             const { data } = await axios.get(`https://fakestoreapi.com/products`);
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         }catch(err){
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products`);
        return data;
    }
  )