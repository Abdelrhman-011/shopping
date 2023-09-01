import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataOutputSearch = createAsyncThunk(
  "getDataOutputSearch",
  async (id, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const respones = await fetch(
        `https://dummyjson.com/products/search?q=${id}`
      ).then((res) => res.json());
      return respones;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const pageOutputSearch = createSlice({
  name: "pageOutputSearch",
  initialState: { loading: false, Output: [] },
  extraReducers: (builder) => {
    builder.addCase(getDataOutputSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDataOutputSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.Output = action.payload.products;
    });
    builder.addCase(getDataOutputSearch.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const dataSearch = pageOutputSearch.reducer;
