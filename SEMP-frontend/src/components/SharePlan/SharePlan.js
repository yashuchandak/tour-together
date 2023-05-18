import React from "react";
import { useState } from "react";
import axios from "axios";
import "./SharePlan.css"

import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { ElevenMp } from "@mui/icons-material";



function SharePlan() {

    let user_id=useSelector(state=>state.Id);
    let username=useSelector(state=>state.name);
    const [dataInputs, setDataInputs]=useState({
        start_place:"",
        tour_place:"",
        travel_means:"",
        likes:"0",
        tour_duration:"",
        details:"",
        advice:"",
        cost_per_person:"",
        user_id:user_id,
        username:username
    });

    const sendRequest=async()=>{
        console.log(username);
        console.log(user_id);
        const resultId=await axios.post("http://localhost:5000/newplan",{
            ...dataInputs,
            user_id:user_id,
            username:username
        }).catch(err=>console.log(err))
        const resultData=resultId.data;
        return resultData;
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        sendRequest().then(data=>{
            alert("Plan added successfully");
        }).catch(err=>console.log(err));
    }
    const handleChange=(event)=>{
        event.preventDefault();
        setDataInputs(prevState=>({
            ...prevState,
            [event.target.name]:event.target.value
        }));
    }

    return (
        <div>
            <form className="form"  onSubmit={handleSubmit}>
            <h1 style={{marginTop: "100px"}}>Add New Plan</h1>
                <input  className='blackBorder' type="text" placeholder='Enter start place' onChange={handleChange} value={dataInputs.start_place} name="start_place" required/>
                <input  className='blackBorder' type="text" placeholder='Enter destination' onChange={handleChange} value={dataInputs.tour_place} name="tour_place" required/>
                <input  className='blackBorder' type="text" placeholder='Enter travel means' onChange={handleChange} value={dataInputs.travel_means} name="travel_means" required/>
                <input  className='blackBorder' type="number" placeholder='Enter tour duration(in days)' onChange={handleChange} value={dataInputs.tour_duration} name="tour_duration" required/>
                <textarea  rows={12} cols={56} className='blackBorder' name="details" placeholder="Enter tour details"  onChange={handleChange} value={dataInputs.details} required/>
                <textarea  rows={6} cols={56} className='blackBorder' name="advice" placeholder="Enter Some advice"  onChange={handleChange} value={dataInputs.advice} required/>
                <input  className='blackBorder' name="cost_per_person" type="number" placeholder="Enter cost per head" onChange={handleChange} value={dataInputs.cost_per_person} required/>
                {/* <input  className='blackBorder' name="date" type="date" placeholder="Date of Travel" onChange={handleChange} value={dataInputs.date} required/> */}
                <input type='submit' className="submitme"  value="Save"/>
            </form>
        </div>

    );
}
// console.log(user); // here

export default SharePlan; // here

