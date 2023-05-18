import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './GuideRegistration.css'
import { AddAlertOutlined } from '@mui/icons-material';

const GuideRegistration = () => {
  let user_id=useSelector(state=>state.Id);
  let username=useSelector(state=>state.name);

    const [guide, setguide] = useState({
      name: "",
      mobile:null,
      city: "",
      insta_username: "",
      fees: "",
      languages: ""
    });
    
      
    
    
    const handleChange = (e) => {
      setguide(prev=>({...prev, [e.target.name]: e.target.value}));
    }
    const sendRequest=async()=>{
      console.log(guide);
      const result=await axios.post("http://localhost:5000/addguide",{
        ...guide,
        id:user_id,
        username:username
      });
      const resultData=await result.data;
      return resultData;
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      sendRequest().then(data=>{
        if(data===1){
          alert("Successfully registerd as guide");
        }
        
      }).catch(err=>{
        console.log(err)
        alert("User already is Guide or some error");
      });
    }


  return (
    <div className='form'>
      <h1 style={{marginTop: "100px", marginLeft: "40px"}}>Become a Guide</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input className='blackBorderg' type="number" placeholder='Enter Mobile' onChange={handleChange} name="mobile"/>
        <input className='blackBorderg' type="text" placeholder='Enter City' onChange={handleChange} name="city"/>
        <input className='blackBorderg' type="text" placeholder='Enter Name' onChange={handleChange} name="name"/>
        <input className='blackBorderg' type="text" placeholder='Enter Instagram UserName' onChange={handleChange} name="insta"/>
        <input className='blackBorderg' type="text" placeholder='Enter Fees' onChange={handleChange} name="fees"/>
        <input className='blackBorderg' type="text" placeholder='Enter Languages Known' onChange={handleChange} name="lang"/>
        <input  type="submit"  className='submitguide'onSubmit={handleSubmit} value="Submit"/>
      </form>
    </div>
  )
}

export default GuideRegistration;