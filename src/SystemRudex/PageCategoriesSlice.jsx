import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getalldatapageCategories = createAsyncThunk(
  "getalldatapageCategories",
  async (id, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const respones = await fetch(
        `https://dummyjson.com/products/category/${id}`
      ).then((res) => res.json());
      return respones;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const pageCategoriesSlice = createSlice({
  name: "pageCategoriesSlice",
  initialState: {
    dataforcategory: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getalldatapageCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getalldatapageCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.dataforcategory = action.payload.products;
    });
    builder.addCase(getalldatapageCategories.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const dataforcategory = pageCategoriesSlice.reducer;
