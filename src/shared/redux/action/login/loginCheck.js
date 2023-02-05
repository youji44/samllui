import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { domainUrl2 } from '../../../constants/apiconstans/domanUrl';
import { Alert } from '../../../../components';
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
                    dispatch(loginCheckResponse(true))
                }
                else
                {
                    dispatch(loginCheckClear())
                    Alert("error",result?.message) 
                }
            })
            .catch(error => {
                alert(error)
                dispatch(loginCheckClear())
                Alert("error","Error while auth checking") 
            })
    }
)

const LoginCheckSlice = createSlice({
    name: 'loginCheck',
    initialState: {
        data: null,
        loading: false
    },
    reducers: {
        gettingLoginCheck: (state, action) => {
            state.loading = true;
        },
        loginCheckResponse: (state, action) => {
            state.data = action.payload;
            state.loading= false;
        },
        loginCheckClear: (state, action) => {
            state.data = null;
            state.loading = false;
        },
    },
})

export const {gettingLoginCheck, loginCheckResponse, loginCheckClear} = LoginCheckSlice.actions
export default LoginCheckSlice.reducer