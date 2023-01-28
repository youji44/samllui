import {loadDashboard, dashboardResponse} from "./action/dashboard"
import {login, loginResponse, loginClear, AuthCheck} from "./action/login"
export const actionsApi = {
    AuthCheck,
    login,
    loginResponse, 
    loginClear,
    loadDashboard,
    dashboardResponse
}
