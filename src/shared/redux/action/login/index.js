import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { domainUrl2 } from '../../../constants/apiconstans/domanUrl';
import { Alert } from '../../../../components';
export const login = createAsyncThunk('login',
    async (data, { dispatch, getState }) => {
        dispatch(getting())
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body:JSON.stringify(data)
        }
        fetch(domainUrl2+"/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.success)
                {
                    localStorage.setItem('token', JSON.stringify(result?.user?.token));
                    localStorage.setItem('user', JSON.stringify(result?.user));
                    dispatch(loginResponse(result?.user))
                }
                else
                {
                    Alert("error",result?.message)
                    throw 'error'
                }
            })
            .catch(error => { dispatch(loginError()) })
    }
)
export const AuthCheck = createAsyncThunk('LoginCheck',
    async (data, { dispatch, getState }) => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        dispatch(gettingLoginCheck())
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${userToken}`)
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(domainUrl2 + `/loginCheck`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result?.success)
                {
                    const user = localStorage.getItem('user');
                    dispatch(loginResponse(JSON.parse(user)))
                }
                else
                {
                    dispatch(loginClear())
                    Alert("error",result?.message) 
                }
            })
            .catch(error => {
                alert(error)
                dispatch(loginClear())
                Alert("error","Error while auth checking") 
            })
    }
)


const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginData: null,
        loading: false,
        error: null,
        LoginCheckloading:false
    },
    reducers: {
        getting: (state, action) => {
            state.loginData = null;
            state.loading = true;
            state.error = false;
        },
        loginResponse: (state, action) => {
            state.loginData = action.payload;
            state.loading = false;
            state.error = false;
            state.LoginCheckloading=false
        },
        loginError: (state, action) => {
            state.loginData = null;
            state.loading = false;
            state.error = true;
            state.LoginCheckloading=false
        },
        loginClear: (state, action) => {
            state.loginData = null;
            state.loading = false;
            state.error = false;
            state.LoginCheckloading=false
        },
        gettingLoginCheck: (state, action) => {
            state.LoginCheckloading = true;
        },
    },
})

// Action creators are generated for each case reducer function
export const {getting, loginResponse, loginError, loginClear, gettingLoginCheck} = loginSlice.actions;
export default loginSlice.reducer;