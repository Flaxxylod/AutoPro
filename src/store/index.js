import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ServiceCardAnimation } from "./SreviceCardAnimation";

const rootReducer = combineReducers({
    animationCard: ServiceCardAnimation,
})

export const store = configureStore({
    reducer: rootReducer
    
})