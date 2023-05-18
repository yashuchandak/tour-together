import React, { useEffect } from "react";
import "./css/UserPageMain.css";
import axios from "axios";
import { useState } from "react";
import CardList from "./CardList/CardList";


window.sortByValue=""
function UserPageMain({searchField}) {
    let [listPlans,setListPlans]=useState([]);
    let [searchFieldValue,setSearchFieldValue]=useState(searchField);
    const sendRequest=async()=>{
        const respose=await axios.get(`http://localhost:5000/viewplans/${searchFieldValue}`);
        const data=await respose.data;
        return data;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(data=>{
            setListPlans(data);
        })
        .catch(err=>console.log(err));
    }
    const handleChange=(event)=>{
        setSearchFieldValue(event.target.value);
    }
    const changeSortValue=(event)=>{
        if(window.sortByValue!==""){
            let element=document.getElementById(window.sortByValue);
            element.style.backgroundColor="rgb(255, 255, 255)";
        }

        window.sortByValue=event.target.value;
        event.target.style.backgroundColor="rgb(101, 105, 112)";
        let newPlans;
        if(window.sortByValue==="Likes"){
            newPlans=[...listPlans].sort((a,b)=>-(a.likes-b.likes));
            setListPlans(newPlans);
        }
        else if(window.sortByValue==="PriceHTOL"){
            newPlans=[...listPlans].sort((a,b)=>-(a.likes-b.likes));
            setListPlans(newPlans);
        }
        else if(window.sortByValue==="PriceLTOH"){
            newPlans=[...listPlans].sort((a,b)=>(a.likes-b.cost_per_person));
            setListPlans(newPlans);
        }
        else if(window.sortByValue==="TimeHTOL"){
            newPlans=[...listPlans].sort((a,b)=>-(a.tour_duration-b.tour_duration));
            setListPlans(newPlans);
        }
        else if(window.sortByValue==="TimeLTOH"){
            newPlans=[...listPlans].sort((a,b)=>(a.tour_duration-b.tour_duration));
            setListPlans(newPlans);
        }
        else if(window.sortByValue==="Recent"){
            newPlans=[...listPlans].sort((a,b)=>-(a.plan_id-b.plan_id));
            setListPlans(newPlans);
        }
    }

    useEffect(()=>{
        sendRequest().then(data=>{
            setListPlans(data);
        })
        .catch(err=>console.log(err));
    },[]);


    return (
        <div className="userPageMainBackground">
            <div className="myflex">
                <div className="userPageSearchBar">
                    <input type={"search"} className="searchField" value={searchFieldValue} onChange={handleChange} placeholder="Enter Destination"></input>
                    <button type={"submit"} className="goBtn" onClick={handleSubmit}>Go</button>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">Sort By</button>
                    <div className="dropdown-content">
                        <option id="Likes" value="Likes" onClick={changeSortValue} className="dropdown-content-option">Likes</option>
                        <option id="PriceHTOL" value="PriceHTOL" onClick={changeSortValue} className="dropdown-content-option">Price (high to low)</option>
                        <option id="PriceLTOH" value="PriceLTOH" onClick={changeSortValue} className="dropdown-content-option">Price (low to high)</option>
                        <option id="TimeHTOL" value="TimeHTOL" onClick={changeSortValue} className="dropdown-content-option">Tour Duration (high to low)</option>
                        <option id="TimeLTOH" value="TimeLTOH" onClick={changeSortValue} className="dropdown-content-option">Tour Duration (low to high)</option>
                        <option id="Recent" value="Recent" onClick={changeSortValue} className="dropdown-content-option">Date Posted (recent first)</option>
                    </div>
                </div>
            </div>
            <div className="card-holder">
                {
                    listPlans.map((plan)=>(
                        <CardList plan={plan}/>
                    ))
                }
            </div>

        </div>
    );
}

export default UserPageMain; 

