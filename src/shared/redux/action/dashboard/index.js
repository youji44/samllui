import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Alert } from '../../../../components';
import { domainUrl2 } from '../../../constants/apiconstans/domanUrl';
export const loadDashboard = createAsyncThunk('Dashboard',
    async (data, { dispatch, getState }) => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        dispatch(gettingDashboard())
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${userToken}`);
        myHeaders.append("Content-Type", "application/json")
        var requestOptions = {
            method: 'get',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(domainUrl2+`/ViewAllUserDetails`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result?.success)
                {
                    
                    dispatch(dashboardResponse(result?.userDetails?.reverse()))
                }
                else
                {
                    dispatch(dashboardClear())
                    throw  'error'
                }
            })
            .catch(error => {dispatch(dashboardClear()); Alert("error","error while loading data")})
    }
)
const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {
        gettingDashboard: (state, action) => {
            state.loading = true;
        },
        dashboardResponse: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        dashboardClear: (state, action) => {
            state.data = [];
            state.loading = false;
        },
    },
})
export const {gettingDashboard, dashboardResponse, dashboardClear} = DashboardSlice.actions;
export default DashboardSlice.reducer;