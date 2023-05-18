import React from "react";
import "./css/SigninPage.css";
import SigninPageLeft from "./SigninPageLeft"; 
import SigninPageRight from "./SigninPageRight";
import NavBar from "../NavBar";

function SigninPage(){
    return(
        <div>
            <div className="sigInPage">
                <SigninPageLeft/>
                <SigninPageRight/>
            </div>
        </div> 
    )
}
export default SigninPage;