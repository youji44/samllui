import { configureStore } from "@reduxjs/toolkit";
import {
	loginCheck,
	login, 
	dashboard
} from "./action"
const store = configureStore({
	reducer: {
		loginCheck,
		login,
		dashboard
	},
})
export default store;