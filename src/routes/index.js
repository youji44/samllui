import React, {Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import {useShareDispatch, useShareSelector, actionsApi} from "../shared";
import { Loader } from '../components';
// import {Splash} from '../ui-elements'
// import {Fade} from '@chakra-ui/react'
// import { AbilityProvider } from '../services'
// import { useAuth } from '../hooks'
// import { isEmpty } from '../helpers'
// import NotFound from '../pages/errors/404'
// const Login = lazy(() => import('./../pages/auth'))
// const ForgetPassword = lazy(() => import('./../pages/auth/ForgetPassword'))
// const ResetPassword = lazy(() => import('./../pages/auth/ResetPassword'))
const AdminPanel = lazy(() => import('./../pages'))
const Login = lazy(() => import('./../pages/auth'))
const  Routes = () => {
    const {loginData, LoginCheckloading} = useShareSelector(state => state?.login)    
    const appDispatcher=useShareDispatch()
    const [token, setToken]= useState(null)
    useEffect(()=>{
        const tokenString = localStorage.getItem('token')
        if(tokenString)
        appDispatcher(actionsApi?.AuthCheck())
    },[])
    useState(()=>{
  
        if(loginData)
        {
            const tokenString = localStorage.getItem('token');
            setToken(JSON.parse(tokenString))
        }
        
    },[loginData])
    console.log('hee:', loginData,":" ,token)
    // const auth = useAuth();
    // if(auth.loading)
    // {
    //     return(
    //         <Fade in={true}>
    //             <Splash />
    //         </Fade>
    //     )
    // }

    // if(isEmpty(auth.user) || !auth.token) 
    // {
    //     return (
    //         <Fade in={true}>
    //             <Suspense fallback={<Splash />}>
    //                 <Router>
    //                     <Switch>
    //                         <Route exact path="/" element={<Login/>} />
    //                         <Route exact path="/forget-password" element={<ForgetPassword/>} />
    //                         <Route exact path="/reset-password/:hash/:id" element={<ResetPassword/>} />
    //                         <Route path="*"  element={<NotFound />} /> 
    //                     </Switch>
    //                 </Router>
    //             </Suspense>
    //         </Fade>
    //     )
    // }
    // return (                
    //         <Fade in={true}>
    //             <AbilityProvider>
    //                 <Suspense fallback={<Splash />}>
    //                     <Router>
    //                         <Switch>
    //                             <Route path="/*" element={<Dashboard/>} />
    //                         </Switch>
    //                     </Router>
    //                 </Suspense>
    //             </AbilityProvider>
    //         </Fade>                
    // )

       return (
        <>
        {
            LoginCheckloading?
            <div style={{width:'100vh', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Loader/>
            </div>:
            loginData?
            <Router>
               <Suspense>
                    <Switch>
                        <Route path="/*" element={<AdminPanel/>} />
                    </Switch>
               </Suspense>
            </Router> :
            <Suspense>
                <Router>
                    <Switch>
                        <Route path="/*" element={<Login/>} />
                    </Switch>
                </Router>
            </Suspense>
        }
        </>
       )
    // if(loginData )
    // {
    //     return (                
                          
    //     )
    // }
    // return (                
           
    //         <Suspense>
                
    //         </Suspense>     
    // )
}

export default Routes;