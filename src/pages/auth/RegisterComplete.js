import React,{useState,useEffect} from "react";
import {auth} from '../../firebase';
import { useDispatch} from "react-redux";
import { Input } from 'antd';
import { UserOutlined,EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import {toast} from 'react-toastify';
//https://bbbootstrap.com/snippets/reactjs-login-form-show-hide-password-using-eye-icon-41491012
//        onChange={e=>setPassword(e.target.value)} ->input area

import { createOrUpdateUser } from "../../functions/auth";



const RegisterComplete = ({history}) => {
   
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [passwordType, setPasswordType] = useState("password");
  //  const { user } = useSelector((state) => ({ ...state }));
    let dispatch = useDispatch();
    const handlePasswordChange =(evnt)=>{
        setPassword(evnt.target.value);
    }
 const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
 

    useEffect(() => {
        setEmail(window.localStorage.getItem("emailForRegistration"));
    },[history]);
    const handleSubmit = async(e)=> {
        e.preventDefault();
        // validation
        if (!email || !password) {
          toast.error("Email and password is required");
          return;
        }
    
        if (password.length < 6) {
          toast.error("Password must be at least 6 characters long");
          return;
        }
    
        try {
          const result = await auth.signInWithEmailLink(
            email,
            window.location.href
          );
          //   console.log("RESULT", result);
          if (result.user.emailVerified) {
            // remove user email fom local storage
            window.localStorage.removeItem("emailForRegistration");
            // get user id token
            let user = auth.currentUser;
            await user.updatePassword(password);
            const idTokenResult = await user.getIdTokenResult();
            // redux store
            console.log("user", user, "idTokenResult", idTokenResult);
    
            createOrUpdateUser(idTokenResult.token)
              .then((res) => {
                dispatch({
                  type: "LOGGED_IN_USER",
                  payload: {
                    name: res.data.name,
                    email: res.data.email,
                    token: idTokenResult.token,
                    role: res.data.role,
                    _id: res.data._id,
                  },
                });
              })
              .catch((err) => console.log(err));
    
            // redirect
            history.push("/");
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
       
    };
    const completeRegistrationForm =() => <form onSubmit={handleSubmit}>
        
        <div><Input type="email"  placeholder="Enter email" value={email} 
         disabled prefix={<UserOutlined />} /></div>
         <br/>
     
    
      <div><Input.Password
     type="password" placeholder="Enter your password" value={password}     
     onChange={e=>setPassword(e.target.value)} autoFocus  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
    </div>
      <br/>
      <br/>
        <button type="submit" className="btn btn-raised" style = {{
    height: "45px",
    width: "100%",
    border: "none",
    backgroundColor: "#689F38",
    borderRadius: "9px",
    fontSize: "12px",
    outline: "0",
    color: "#fff",
    cursor: "pointer",
    fontFamily:"Monserrat",
    transition: "all 0.5s"}}>Complete Registration</button>
    </form>
    return(
        <div className="container p-5"  style={ {
            //minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
        
            height: "380px",
            width: "350px",   //form container size
            backgroundColor: "#C5E1A5",
            position: "relative",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
            fontFamily: "sans-serif",
            borderRadius: "10px",
            padding: "20px",
            marginTop:"20px"
        }}>
            <div className="row">
                <div className="col-md-70 offset-md-35">
                <h4>Register Complete</h4>
              
                     {completeRegistrationForm()}
                </div>
                  
            </div>
    
           
        </div>
    );
};

export default RegisterComplete;