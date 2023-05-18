import React from "react";
import "../SignUpPage/css/SingUpPage.css";
import UserPageMain from "./UserPageMain.js";
import { useLocation } from "react-router-dom";

function UserPage() {
    const location=useLocation();
    const searchField=location.state.searchField;
    return (
        <React.Fragment>
            <UserPageMain searchField={searchField}/>
        </React.Fragment>
    );
}



export default UserPage;