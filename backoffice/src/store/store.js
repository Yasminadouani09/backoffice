import { configureStore } from '@reduxjs/toolkit'
import { userInfo } from './UserInfo'
import { courses } from './courses'
import  coursesSlice from './courses'
import ProgramSlice from "./Program";
import authSlice from './auth'

export const store = configureStore({
    reducer: {
        userInfo, coursesSlice, ProgramSlice,authSlice
    }
})