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
import { PatientsList } from './patientList'
import { PatientDetails } from './patientDetails'
import { UploadData } from './uploadData'
import { AddPatient } from './addPatient'
import { Users } from './users'
import { RoomsList } from './rooms'

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
          <Route path="/patients-list" exact element={<ProtectedRoute><PatientsList/></ProtectedRoute>}/> 
          <Route path="/patients-details/:id" exact element={<ProtectedRoute><PatientDetails/></ProtectedRoute>}/> 
          <Route path="/upload-data" exact element={<ProtectedRoute><UploadData/></ProtectedRoute>}/> 
          <Route path="/add-patient" exact element={<ProtectedRoute><AddPatient/></ProtectedRoute>}/> 
          <Route path="/users" exact element={<ProtectedRoute><Users/></ProtectedRoute>}/> 
          <Route path="/rooms" exact element={<ProtectedRoute><RoomsList/></ProtectedRoute>}/> 
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
