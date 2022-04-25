import React,{useState,useEffect} from "react";
import {auth} from '../../firebase';
import { useSelector } from "react-redux";
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {toast} from 'react-toastify';


const Register = ({ history }) => {
    
    const [email,setEmail]= useState("");
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
      if (user && user.token) history.push("/");
    }, [user,history]);
  

    const handleSubmit = async(e)=> {
        e.preventDefault(); //prevent the browser to load
        const config = {
            url:process.env.REACT_APP_REGISTER_REDIRECT_URL,//hardcoded use env, this user landed after confirmation
            handleCodeInApp:true //finish register to another device
        }

       await auth.sendSignInLinkToEmail(email.trim(),config)
       toast.success(`Email is sent to ${email}.Click this link to confirm your registration`);

        //save in local storage
        window.localStorage.setItem('emailForRegistration',email.trim())
        //clear state
        setEmail("");
    };
    const registerForm =() => <form onSubmit={handleSubmit}>
        <div><Input size="large"  type="email" placeholder="Enter a valid email" prefix={<UserOutlined />} value={email} onChange={(e)=>setEmail(e.target.value)} autofocus/></div>
         
        <br />
        <div><button type="submit" className="btn btn-raised" style = {{
height: "45px",
    width: "100%",
    border: "none",
    backgroundColor: "#689F38",
    borderRadius: "9px",
    fontSize: "12px",
    fontColor:"#fffff",
    outline: "0",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.5s"}}>Submit</button></div>
        
    </form>
    return(
        <div className="container p-5" style={ {
            //minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
        
            height: "380px",
            width: "350px",   //form container size
            backgroundColor: "#f5faf0",
            position: "relative",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
            fontFamily: "sans-serif",
            borderRadius: "10px",
            padding: "20px",
            marginTop:"20px"
        }}>
            <div className="row">
                <div className="col-md-70 offset-md-35">
               
               <div> <h4>Email Confirmation</h4></div>
                <br/>
                <br/>
                     {registerForm()}
                </div>
                  
            </div>
    
           
        </div>
    );
};

export default Register;