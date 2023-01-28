import React from 'react'
import Routes from './routes'
import { store } from "./shared";
import { Provider } from "react-redux";
import "antd/dist/antd.less"
const App = () => {    
    return (
      <Provider store={store}>
          <Routes />
      </Provider>
      )
}

export default App
