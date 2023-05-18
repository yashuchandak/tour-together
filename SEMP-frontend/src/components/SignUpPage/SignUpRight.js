import React from "react";
import "./css/SignUpPageRight.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Authactions } from "../../store";
import { useNavigate } from "react-router-dom";


function SignUpRight() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [dataInputs, setDataInputs]=useState({
        email:"",
        username:"",
        password:"",
    });

    const sendRequest=async()=>{
        const resultId=await axios.post("http://localhost:5000/register",{
            email:dataInputs.email,
            username:dataInputs.username,
            password:dataInputs.password
        }).catch(err=>console.log(err))
        const id=await resultId.data;
        return id;
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        sendRequest().then((data)=>{
            if(data.id==-1){
                alert(data.message);
            }
            else{
                dispatch(Authactions.login(data));
                navigate("/user",{
                    state:{
                        searchField:""
                    }
                });
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
        <div className="signUpPageInputs">
            <div className="signUpPageInputsRelative">
                <div className="signUpPageCenter">
                    <h2 className="signUpPageInputsH1">User Sign up</h2>
                </div>
                <form>
                    <div className="signUpPageInputsInputName"> 
                        <div className="signUpPageExtraDiv">
                            <img src="/icons/mail.png" alt="logo" className="signUpPageInputIcon"/>
                            <div className="exp">
                                <input type="text" className="signUpPageInputsInputNameInp" name="email" onChange={handleChange} value={dataInputs.email}></input>
                            </div>
                        </div>
                    </div>
                    <div className="signUpPageInputsInputName"> 
                        <div className="signUpPageExtraDiv">
                            <img src="/icons/user.png" alt="logo" className="signUpPageInputIcon"/>
                            <div className="exp">
                                <input type="text" className="signUpPageInputsInputNameInp" name="username" onChange={handleChange} value={dataInputs.username}></input>
                            </div>
                        </div>
                    </div>
                    <div className="signUpPageInputsInputName">
                        <div className="signUpPageExtraDiv">
                            <img src="/icons/padlock.png" alt="logo" className="signUpPageInputIcon"/>
                            <div className="exp">
                                <input type="password" className="signUpPageInputsInputNameInp" name="password" onChange={handleChange} value={dataInputs.password}></input>
                            </div>
                        </div>
                    </div>
                    <div className="signUpPageSubmit">
                        <input type="button" value="submit" className="signUpPageSumbitButton"  onClick={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignUpRight;