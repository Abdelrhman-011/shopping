import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const getDataDetails = createAsyncThunk(
  "getDataDetails",
  async (id, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const respones = await fetch(`https://dummyjson.com/products/${id}`).then(
        (res) => res.json()
      );
      return respones;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const pageDetailsSlice = createSlice({
  name: "pageDetailsSlice",
  initialState: { product: {}, loading: false, carts: [], count: 1 },
  extraReducers: (builder) => {
    builder.addCase(getDataDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDataDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;

      if (
        state.carts.some((e) => {
          return e.id === state.product.id;
        })
      ) {
        state.carts.map((e) => {
          if (e.id === state.product.id) {
            state.product = e;
          }
        });
      } else {
        state.product = {
          ...state.product,
          count: state.count,
          totalprice:
            state.product.price -
            (state.product.discountPercentage / 100) * state.product.price,
        };
      }
    });
    builder.addCase(getDataDetails.rejected, (state) => {
      state.loading = true;
    });
  },
  reducers: {
    addtocart: (state, product) => {
      if (
        state.carts.every((e) => {
          return e.id !== product.payload.id;
        })
      ) {
        state.carts = [...state.carts, product.payload];
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product has been added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        state.carts.map((e) => {
          if (e.id === product.payload.id) {
            e.count += 1;
            state.product.count += 1;
          }
          return e;
        });
      }
    },
    increament: (state, product) => {
      if (
        state.carts.some((e) => {
          return e.id == product.payload.id;
        })
      ) {
        state.carts.map((e) => {
          if (e.id === product.payload.id) {
            state.product.count += 1;
            e.count += 1;
          }
          return e;
        });
      } else {
        state.product.count += 1;
      }
    },
    decreament: (state, product) => {
      if (
        state.carts.some((e) => {
          return e.id == product.payload.id;
        })
      ) {
        state.carts.map((e) => {
          if (e.id === product.payload.id && product.payload.count > 1) {
            state.product.count -= 1;
            e.count -= 1;
          }
          return e;
        });
      } else {
        if (state.product.count > 1) {
          state.product.count -= 1;
        }
      }
    },
    delet: (state, product) => {
      const newarr = state.carts.filter((e) => {
        return e.id !== product.payload.id;
      });
      state.carts = [...newarr];
    },
    clearCart: (state) => {
      state.carts = [];
    },
  },
});

export const productDetails = pageDetailsSlice.reducer;
export const { addtocart, increament, decreament, delet, clearCart } =
  pageDetailsSlice.actions;
