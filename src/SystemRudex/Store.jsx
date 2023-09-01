import { configureStore } from "@reduxjs/toolkit";
import { categoriesData } from "./HomeSlice";
import { dataforcategory } from "./PageCategoriesSlice";
import { productDetails } from "./PageDetailsSlice";
import { dataSearch } from "./PageOutputSearch";
export const store = configureStore({
  reducer: {
    categoriesData,
    dataforcategory,
    productDetails,
    dataSearch,
  },
});
