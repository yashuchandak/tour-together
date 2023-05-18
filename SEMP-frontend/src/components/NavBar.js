import React, { useEffect } from "react";
import "./css/NavBar.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Authactions, store } from "../store";
import { useDispatch } from "react-redux";

function NavBar(){
    let userId=useSelector(state=>state.Id);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    const navigateToSignIn=()=>{
        navigate("/auth/SignIn");
    }
    const navigateToSignUp=()=>{
        navigate("/auth/SignUp");
    }
    const navigateToHome=()=>{
        navigate("/");
    }
    const navigateToSharePlan=()=>{
        navigate("/user/SharePlan");
    }
    const LogOutHandle=()=>{
        dispatch(Authactions.logOut());
        navigate("/");
    }
    const NavigateToMyContributions=()=>{
        navigate("/myContributions");
    }
    const NavigateToGuide=()=>{
        navigate("/guideRegister");
    }
    const navigateToSearchGuide=()=>{
        navigate("/SearchGuide");
    }

    return(
        <React.Fragment>
        <div className="navbar">
            <div className="navbar_innerPart">
                <div className="navbar_img">
                    <img src="/icons/logo.png" id="navbarLogo" alt="planMyTour" onClick={navigateToHome} />
                </div>
                {
                    userId===-1 && 
                    <div className="navbar_rightPart">
                        <div className="navbar_button">
                            <button className="navbar_rightPart_Signin" onClick={navigateToSignIn}>SignIn</button>
                        </div>
                        <div className="navbar_button">
                            <button className="navbar_rightPart_SignIn" onClick={navigateToSignUp}>SignUp</button>
                        </div>
                    </div>
                }
                {
                    userId!==-1 &&
                    <div className="navbar_rightPart">
                        <div className="navbar_button">
                            <button className="navbar_rightPart_SharePlan" onClick={navigateToHome}>Search Plans</button>
                        </div>
                        <div className="navbar_button">
                            <button className="navbar_rightPart_SharePlan" onClick={navigateToSearchGuide}>Search Guides</button>
                        </div>
                        <div className="navbar_button">
                            <button className="navbar_rightPart_SharePlan" onClick={navigateToSharePlan}>Share Plan</button>
                        </div>
                        <div className="navbar_button">    
                            <button className="navbar_rightPart_Account">Account</button>
                            <div className="account-dropdown">
                                <option onClick={NavigateToMyContributions} id="Contributions" value="Contributions"  className="dropdown-content-option">My Contributions</option>
                                <option onClick={NavigateToGuide} id="Guide" value="Guide"  className="dropdown-content-option">Register as Guide</option>
                                <option onClick={LogOutHandle} id="Logout" value="Logout"  className="dropdown-content-option">Logout</option>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
        </React.Fragment>
    )
}
export default NavBar;