import React, { useState } from "react"
import "./SearchGuide.css";
import axios from "axios";
import CardGuide from "./CardGuide";


const SearchGuide=()=>{
    const [listGuide,setListGuide]=useState([]);
    const [searchFieldValue,setSearchFieldValue]=useState("");
    const handleChange=(e)=>{
        setSearchFieldValue(e.target.value);
    }
    const sendRequest=async(e)=>{
        const result=await axios.get(`http://localhost:5000/viewguides/${searchFieldValue}`);
        const resultData=await result.data;
        return resultData;
    }
    const handleSubmit=()=>{
        sendRequest().then(data=>{
            setListGuide(data);
            console.log(listGuide);
        }).catch(err=>console.log(err));
    }
    return(
        <div className="guidePageMainBackground">
            <div className="myflexGuide">
                <div className="userPageSearchBar">
                    <input type={"search"} className="searchField" value={searchFieldValue} onChange={handleChange} placeholder="Enter Destination"></input>
                    <button type={"submit"} className="goBtn" onClick={handleSubmit}>Go</button>
                </div>
                <div className="card-holder">
                    {
                        listGuide.map((guide)=>(
                            <CardGuide guide={guide}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchGuide;