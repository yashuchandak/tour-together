import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import SigninPage from './components/SigninPage/SigninPage';
import SignUpPage from "./components/SignUpPage/SignUpPage";
import UserPage from "./components/UserPage/UserPage";
import NavBar from './components/NavBar';
import MyContributions from './components/myContribution/MyContribution';
import GuideRegistration from './components/GuideRegistration/GuideRegistration';
import SharePlan from "./components/SharePlan/SharePlan";
import SearchGuide from './components/SearchGuide/SearchGuide';


function App() {
  return (
    <React.Fragment> {/* react.fragment vs div */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth/Signin" element={<SigninPage/>}/>
        <Route path="/auth/SignUp" element={<SignUpPage/>}/>
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/user/shareplan" element={<SharePlan/>}/>  
        <Route path="/user/guideregistration" element={<GuideRegistration/>}/>  
        <Route path="/myContributions" element={<MyContributions/>}/>
        <Route path="/guideRegister" element={<GuideRegistration/>}/>
        <Route path="/sharePlan" element={<SharePlan/>}/>
        <Route path="/SearchGuide" element={<SearchGuide/>}/>
       </Routes> 
    </React.Fragment>
  );
}

export default App;
