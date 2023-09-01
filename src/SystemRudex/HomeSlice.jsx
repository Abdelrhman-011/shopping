import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getalldatacategories = createAsyncThunk(
  "getalldatacategories",
  async (id, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const respones = await fetch(
        "https://dummyjson.com/products/categories"
      ).then((res) => res.json());
      return respones;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getallproducts = createAsyncThunk(
  "getallproduct",
  async (id, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const respones = await fetch(
        "https://dummyjson.com/products?limit=100&skip=0"
      ).then((res) => res.json());
      return respones;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getdataforSmartphone = createAsyncThunk(
  "getdataforSmartphone",
  async (id, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const respones = await fetch(
        "https://dummyjson.com/products/category/smartphones"
      ).then((res) => res.json());
      return respones;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getdataforLaptops = createAsyncThunk(
  "getdataforLaptops",
  async (id, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const respones = await fetch(
        "https://dummyjson.com/products/category/laptops"
      ).then((res) => res.json());
      return respones;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getdataforFragrances = createAsyncThunk(
  "getdataforFragrances",
  async (id, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const respones = await fetch(
        "https://dummyjson.com/products/category/fragrances"
      ).then((res) => res.json());
      return respones;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getdataforskincares = createAsyncThunk(
  "getdataforskincare",
  async (id, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const respones = await fetch(
        "https://dummyjson.com/products/category/skincare"
      ).then((res) => res.json());
      return respones;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const homeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    categoriesaData: [],
    loading: false,
    allproducts: [],
    dataSmartphone: [],
    dataLaptops: [],
    datafragrances: [],
    dataskincare: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getalldatacategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getalldatacategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categoriesaData = action.payload;
    });
    builder.addCase(getalldatacategories.rejected, (state) => {
      state.loading = true;
    });
    builder.addCase(getallproducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getallproducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allproducts = action.payload.products;
    });
    builder.addCase(getallproducts.rejected, (state) => {
      state.loading = true;
    });
    builder.addCase(getdataforSmartphone.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getdataforSmartphone.fulfilled, (state, action) => {
      state.loading = false;
      state.dataSmartphone = action.payload.products;
    });
    builder.addCase(getdataforSmartphone.rejected, (state) => {
      state.loading = true;
    });
    builder.addCase(getdataforLaptops.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getdataforLaptops.fulfilled, (state, action) => {
      state.loading = false;
      state.dataLaptops = action.payload.products;
    });
    builder.addCase(getdataforLaptops.rejected, (state) => {
      state.loading = true;
    });
    builder.addCase(getdataforFragrances.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getdataforFragrances.fulfilled, (state, action) => {
      state.loading = false;
      state.datafragrances = action.payload.products;
    });
    builder.addCase(getdataforFragrances.rejected, (state) => {
      state.loading = true;
    });
    builder.addCase(getdataforskincares.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getdataforskincares.fulfilled, (state, action) => {
      state.loading = false;
      state.dataskincare = action.payload.products;
    });
    builder.addCase(getdataforskincares.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const categoriesData = homeSlice.reducer;
