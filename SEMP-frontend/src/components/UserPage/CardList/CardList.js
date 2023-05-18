import "./CardList.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {IconButton } from '@mui/material';
import axios from "axios";
import { useEffect, useState } from "react";


function CardList({plan}){
    let [like,setLike]=useState(plan.likes);
    const sendIncreamentRequest=async()=>{
        const result=await axios.put("http://localhost:5000/plans/updateLike",{
            id:plan.plan_id,
            likes:like,
        }).catch(err=>console.log(err));
        console.log(result);
        const resultData=await result.data;
        return resultData;
    }
    const increamentLikes=()=>{ 
        sendIncreamentRequest().then(data=>{
            console.log(data);
            setLike(data);
            let element=document.getElementById("likes_Plan");
            console.log(element);
            element.textContent=data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        
    },[like]);


    return(
        <div className="card">
            <div className="myflexdivsb">
                <div>
                    {/* <img className="DP" alt="DP"></img> */}
                    <strong>{plan.username}</strong>
                </div>
                <span>{plan.date}</span>
            </div>
            <br></br>
            <div className="myflexdivsa">
                <div>
                    <span>{plan.start_place} &nbsp;&nbsp; TO &nbsp;&nbsp; {plan.tour_place}</span>
                </div>
                <span>{plan.travel_means}</span>
                <span>{plan.tour_duration}<span>&nbsp;Days</span></span>
                <span><span>&#8377;</span>&nbsp;{plan.cost_per_person}</span>
            </div>
            <br></br>
            <pre>
                {plan.details}
            </pre>
            <br></br>
            <div>
                {plan.advice}
            </div>
            <div className="likes">
                <IconButton onClick={increamentLikes}>
                    <ThumbUpIcon/>
                </IconButton>
                <span id="likes_Plan">{plan.likes}</span>
            </div>
        </div>
    );
};

export default CardList;