//Step-->1  Firstly install " npm install react-redux "
//Step-->2  Create 'Store.js' file
//Step-->3  import Store.js and Provider & add '<Provider store={Store}> in index.js
//Step-->3  Create 'CounterSlice.js' file
//Step-->3  Create 'Store.js' 

import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Counter/CounterSlice";

export default configureStore({
    reducer:{
        counter:CounterSlice
    }
})
