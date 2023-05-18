import React from "react";
import "./css/HomePage.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage(){

    const [dataInputs,setDataInputs]=useState("");
    const navigate=useNavigate();

    const handleChange=(event)=>{
        setDataInputs(event.target.value);
    }


    const handleSubmit=(event)=>{
        navigate("/user",{
            state:{
                searchField:dataInputs
            }
        });
    }

    return(
        <React.Fragment>
            <div className="homePageBackground">
                <div className="searchBar">
                    <input type={"search"} className="searchField" placeholder="Enter Destination" value={dataInputs} onChange={handleChange}></input>
                    <button type={"submit"} className="goBtn" onClick={handleSubmit}>Go</button>
                </div>
            </div>

        </React.Fragment>
    );

}
export default HomePage;
