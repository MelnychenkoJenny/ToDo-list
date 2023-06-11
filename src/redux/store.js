// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { createStore } from "redux";
// import { filtersReducer, tasksReducer } from "./reducer";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";
const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
    },
  });



/*  Redux */
//   const enhancer = devToolsEnhancer();
//   export const store = createStore(rootReducer, enhancer)
  