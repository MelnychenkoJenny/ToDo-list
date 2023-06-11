// import { combineReducers } from "redux";
// import { statusFilters } from "./constants";
// import { createReducer } from "@reduxjs/toolkit";
// import {
//   addTask,
//   deleteTask,
//   setStatusFilter,
//   toggleCompleted,
// } from "./actions";


/*Redux-toolkit*/

// const tasksInitialState = [
//         { id: 0, text: "Learn HTML and CSS", completed: true },
//         { id: 1, text: "Get good at JavaScript", completed: true },
//         { id: 2, text: "Master React", completed: false },
//         { id: 3, text: "Discover Redux", completed: false },
//         { id: 4, text: "Build amazing apps", completed: false },
//       ];
    
//    export const tasksReducer = createReducer(tasksInitialState, {
//     [addTask]: (state, action) => {
//       state.push(action.payload);
//     },
//     [deleteTask]: (state, action) => {
//       const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
//     },
//     [toggleCompleted]: (state, action) => {
//       for (const task of state) {
//         if(task.id === action.payload) {
//           task.completed = !task.completed;
//           break;
//         }
//       }
//     },
//    });
    
    
//       const filtersInitialState = {
//         status: statusFilters.all,
//       };
    
//      export const filtersReducer = createReducer(filtersInitialState, {
//       [setStatusFilter]: (state, action) => {
//         state.status = action.payload;
//       },
//      });






/*Redux */
// const tasksInitialState = [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ];

// const tasksReducer = (state = tasksInitialState, action) => {
//     switch (action.type) {
//       case "tasks/addTask":
//         return [...state, action.payload];
//       case "tasks/deleteTask":
//         return state.filter(task => task.id !== action.payload);
//       case "tasks/toggleCompleted":
//         return state.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return { ...task, completed: !task.completed };
//         });
//       default:
//         return state;
//     }
//   };


//   const filtersInitialState = {
//     status: statusFilters.all,
//   };

//   const filtersReducer = (state = filtersInitialState, action) => {
//     switch (action.type) {
//       case "filters/setStatusFilter":
//         return {
//           ...state,
//           status: action.payload,
//         };
//       default:
//         return state;
//     }
//   };

//   export const rootReducer = combineReducers({
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   });
// композиція редюсерів
// Код редюсерів tasksReducer та filtersReducer
// export const rootReducer = (state = {}, action) => {

//     return {
// Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
//       tasks: tasksReducer(state.tasks, action),
//       filters: filtersReducer(state.filters, action),
//     };
//   };