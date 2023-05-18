import React, { useEffect,useState } from "react";
import "./MyContribution.css";
import axios from "axios";
import CardList from "../UserPage/CardList/CardList";
import { useSelector } from "react-redux";
import { Authactions, store } from "../../store";


function MyContributions(){
    const [listPlans,setListPlans]=useState([]);
    let userId=useSelector(state=>state.Id);
    // console.log(userId);
    const sendRequest=async()=>{
        const response=await axios.get(`http://localhost:5000/myContributions/${userId}`);
        const resultData=await response.data;
        return resultData;
    }

    useEffect(()=>{
        sendRequest().then(data=>{
            setListPlans(data);
        }).catch(err=>console.log(err));
        // console.log(listPlans);
    },[listPlans]);




    return(
        <div className="myContributionsBackground">
            <div className="gapa"></div>
            <div className="card-holder">
                {
                    listPlans.map((plan)=>(
                        <CardList plan={plan}/>
                    ))
                }
            </div>

        </div>
    )
}

export default MyContributions;



