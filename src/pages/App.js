import React from 'react'

// routes
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

//pages
import { Login } from './login'
import { Home } from './home'

//style
import { Container } from '../components/molecules/Layout'
import 'antd/dist/antd.css'
import "../assets/general.css"

const ProtectedRoute = ({children}) =>{
  if(sessionStorage.getItem("sessionId")){
    return children
  }else{
    return  <Login/>
  }
}

const App = () => {
  return (
    <Router>
      <Container>
      <Routes>
        <Route path="/" exact element={<ProtectedRoute><Home/></ProtectedRoute>}/> 
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
