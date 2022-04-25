
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React,{useState,useEffect} from "react";

import {auth, googleAuthProvider} from "../../firebase";

import { useDispatch,useSelector } from "react-redux";  

import { Input, Space } from 'antd';
import { 
    MailOutlined, GoogleOutlined, EyeInvisibleOutlined, EyeTwoTone,UserOutlined
    } from "@ant-design/icons";
import {toast} from 'react-toastify';

import{Link} from 'react-router-dom'

import { createOrUpdateUser } from "../../functions/auth";



const Login = ({history}) => {

    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
  
    const [loading, setLoading] = useState(false);

    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
      let intended = history.location.state;
      if (intended) {
        return;
      } else {
        if (user && user.token) history.push("/");
      }
    }, [user, history]);
  

    let dispatch = useDispatch();
//new addded
    const roleBasedRedirect = (res) => {
      // check if intended
      let intended = history.location.state;  //balik san galing
      if (intended) {
        history.push(intended.from);
      } else {
        if (res.data.role === "admin") {
          history.push("/admin/dashboard");
        } else {
          history.push("/user/history");
        }
      }
    };
  
 

    const handleSubmit = async(e)=> {
      e.preventDefault();
      setLoading(true);
      // console.table(email, password);
      try {
        const result = await auth.signInWithEmailAndPassword(email, password);
        // console.log(result);
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
  
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
            roleBasedRedirect(res);
          })
          .catch((err) => console.log(err));
  
       // history.push("/");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        setLoading(false);
      }
    };


    const loginForm =() => (
       
            <Form onSubmit={handleSubmit}>
                    <div className="form-group" >
                        
                        <Input  prefix={<UserOutlined />} type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                        
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </div>
                    
                    <div className="form-group" >
                       
                        <Input.Password type="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)}
                        
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                       
                    </div>
                    <div className="form-group" >
                        <Form.Check type="checkbox" label="Remember me" />
                    </div>
                    <div><button type="submit"className="btn btn-block" style={{backgroundColor:"#8BC34A"}} block icon={<MailOutlined/>} size ="large">Login</button></div>
                    
                   
            </Form>
          
          
    );

 const googleLogin = async()=>{
  auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
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
            roleBasedRedirect(res);
          })
          .catch((err) => console.log(err));
     
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
 };

    return (
        
            <div clasName="container p-5" >
               
                <div className="row" >
                    <div  className="col-md-4 offset-md-4" style={{backgroundColor:"#f5faf0", marginTop:"30px", borderRadius:"5px"}}>
                    <br />
                    <h4>Login</h4>

                    {loginForm()}

                    <Button onClick={googleLogin} type="danger" className="btn btn-block" block icon={<GoogleOutlined/>} size ="large"  shape="round" style={{backgroundColor:"#8BC34A"}}>Login with Google</Button>
                    <Link to="/forgot/password" className="float-right text-danger" style={{marginBottom:"10px"}}>Forgot Password</Link>
                   
                    </div>
                </div>
               
            </div>
        
    );
};

export default Login;