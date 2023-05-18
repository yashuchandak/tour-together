import React from "react";
import "./css/SingUpPage.css";
import SignUpLeft from "./SignUpLeft";
import SignUpRight from "./SignUpRight";
import NavBar from "../NavBar";

function SignUpPage(){
    return(
        <div>
            <div className="signUpPage">
                <SignUpLeft/>
                <SignUpRight/>
            </div>
        </div> 
    )
}
export default  SignUpPage;