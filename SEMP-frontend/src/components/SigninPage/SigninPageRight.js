import React from "react";
import "./css/SigninPageRight.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Authactions } from "../../store";
import { useNavigate } from "react-router-dom";

function SigninPageRight(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [dataInputs,setDataInputs]=useState({
        email:"",
        password:""
    });
    const sendRequest=async()=>{
        const resultId=await axios.post("http://localhost:5000/login",{
            email:dataInputs.email,
            password:dataInputs.password
        }).catch(err=>console.log(err));
        const data=await resultId.data;
        return data;
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        sendRequest()
        .then(data=>{
            console.log(data);
            if(data.id!==-1){
                dispatch(Authactions.login({
                    Id:data.id,
                    name:data.username
                }));
                navigate("/user",{
                    state:{
                        searchField:""
                    }
                });
            }
            else{
                if(data.message){
                    alert(data.message);
                }
                else{
                    alert("Unknown error");
                }
            }
        });
    }
    const handleChange=(event)=>{
        setDataInputs(prevState=>({
            ...prevState,
            [event.target.name]:event.target.value
        }));
    }

    return (
        <div className="signinPageInputs">
            <div className="signinPageInputsRelative">
                <div className="signinPageCenter">
                    <h2 className="signinPageInputsH1">User Sign in</h2>
                </div>
                <div className="signinPageInputsInputName"> 
                    <div className="signinPageExtraDiv">
                        <img src="/icons/mail.png" alt="logo" className="signinPageInputIcon"/>
                        <div className="exp">
                            <input type="text" className="signinPageInputsInputNameInp" name="email" 
                                onChange={handleChange} value={dataInputs.emailid}></input>
                        </div>
                    </div>
                </div>
                <div className="signinPageInputsInputName">
                    <div className="signinPageExtraDiv">
                        <img src="/icons/padlock.png" alt="logo" className="signinPageInputIcon"/>
                        <div className="exp">
                            <input type="password" className="signinPageInputsInputNameInp" name="password" 
                                onChange={handleChange} value={dataInputs.password}></input>
                        </div>
                    </div>
                </div>
                <div className="signinPageSubmit">
                    <input type="button" value="submit" className="signinPageSubmitButton" onClick={handleSubmit}/>
                </div>
                
            </div>
        </div>
    );
}

export default SigninPageRight;

