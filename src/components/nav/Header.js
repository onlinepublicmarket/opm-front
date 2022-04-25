import React, { useState } from "react";
import Search from "../forms/Search";


import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  DownOutlined,
  NotificationOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  MessageFilled,
  MessageOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
 // console.log(cart.length);
  return (
    <>
    
    {/* <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{backgroundColor:"#7CB342",padding:"1px 0px 0px 0px;", borderBottom:'none'}}>
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Sell on OPM</Link>
      </Item>

      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="float-right" >
          <Link to="/register">Register</Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="float-right" >
          <Link to="/login">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<NotificationOutlined />}
          title="Notifications"
          className="float-right"
        >
          <Item key="setting:1">Seller Center</Item>
          <Item key="setting:2">Option 2</Item>
          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}
    </Menu> */}
    {/* top menu */}
<div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 justify-content-space-between  ">
            <Link to="/login" style={{justifyContent:"space-between",fontFamily:  'Montserrat'}}>
                Sell on Us
              </Link>
              <Link to="/about-us" style={{justifyContent:"space-between",fontFamily:  'Montserrat'}}>
                About Us
              </Link>
              <Link to="/login" style={{justifyContent:"space-between",fontFamily:  'Montserrat'}}>
               Become Rider
              </Link>
              <Link to="/user/history" style={{justifyContent:"space-between",fontFamily:  'Montserrat'}}>
              Notifications
              </Link>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              
            
         
              <a target="_blank" href="https://www.facebook.com/OnlinePublicMarket22">  <i className="fab fa-facebook-f"></i></a>
          
              <a target="_blank" href="https://www.instagram.com/onlinepublicmarket22">  <i className="fab fa-instagram"></i></a>
             
            
              <a target="_blank" href="https://twitter.com/Onlinemarket221">  <i className="fab fa-twitter"></i></a>
            
              
                <a target="_blank" href="https://www.facebook.com/OnlinePublicMarket22"><i className="fab fa-youtube"></i></a>
            
             
              <a target="_blank" href="https://www.facebook.com/OnlinePublicMarket22">  <i className="fab fa-pinterest-p"></i></a>
             
            </div>
          </div>
        </div>
      </div>
{/* middle menu */}
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{backgroundColor:"#f5faf0",padding:"15px", position: "sticky",textAlign:"center",
  top: "0px",zIndex:"1000",   boxShadow: "0 1px 1px 0 rgba(0,0,0,.1)"}}>
                <Item key="home"  to="/">
                  <Link className="navbar-brand" to="/" >
                  <img alt="logo" src="/LOGO.png" style={{width:"90px" }}/>
                  </Link>
                </Item>

                 
                  
                   <Item>  <Search /> </Item>
                   <Item key="shop"  icon={<ShopOutlined  style={{color:"#7CB342",fontSize:"150%"}} />} >
                      <Link to="/shop"  style={{backgroundColor:"#9CCC65"}}></Link>
                 </Item> 
                   <Item key="cart" icon={<ShoppingCartOutlined style={{color:"#7CB342",fontSize:"150%"}} />}>
                      <Link to="/cart">
                      <Badge count={cart.length} offset={[9, 0]} style={{marginLeft:"-19px",top: "-9px",backgroundColor:"#9A9334"}}>
                      </Badge>
                     </Link>
                   </Item>
                   <Item key="chat"  icon={<MessageOutlined  style={{color:"#7CB342",fontSize:"150%"}} />} >
                      <Link to="/chat"  style={{backgroundColor:"#9CCC65"}}></Link>
                 </Item> 
                {!user && (
                  <Item key="register" className="float-right" style={ {marginLeft: 'auto', display:'flex'
                
                  } }>
                    <Link to="/register" style={{color:"#7CB342",fontFamily:'Montserrat'}}>Register</Link>
                  </Item>
                )}

                {!user && (
                  <Item key="login"  className="float-right" style={ {float:'right', display:'flex',
                
                  } }>
                    <Link to="/login" style={{color:"#7CB342",fontFamily:'Montserrat'}}>Login</Link>
                  </Item>
                )}

                {user && (
                  <SubMenu
                
                    title={`Hi, ${user.email && user.email.split("@")[0]}`}
                    icon={<DownOutlined  style={{float:"right", marginTop:"19px",marginLeft:"5px",fontSize:'10px'}}/>}
                    style={ {marginLeft: 'auto', display:'flex',
                              justifyContent:"space-around",
                              alignItems:'center', width:"180px",fontFamily:'Montserrat',color:"#7CB342"}}
                              
                  >
                    
                  
          
                    {user && user.role === "subscriber" && (
                      <Item>
                        <Link to="/user/history">Dashboard</Link>
                      </Item>
                    )}

                    {user && user.role === "subscriber" && (
                      <Item>
                        <Link to="/seller">Seller Center</Link>
                      </Item>
                    )}
                     {user && user.role === "subscriber" && (
                      <Item>
                        <Link to="/rider">Rider Center</Link>
                      </Item>
                    )}

                    {user && user.role === "admin" && (
                      <Item>
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </Item>
                    )}

                    {user && user.role==="admin"&&(
                      <Item>
                        <Link to="/admin/dashboard/super">Super Dashboard</Link>
                      </Item>
                    )}


                    <Item icon={<LogoutOutlined />} onClick={logout}>
                      Logout
                    </Item>
                  </SubMenu>
                )}
                
               
                {/* <span className="float-right p-1">
                  <Search />
                </span> */}
    </Menu>

   
    <Menu onClick={handleClick}  selectedKeys={[current]} mode="horizontal" style={{backgroundColor:"#7C9D39",padding:"1px", fontFamily:  'Montserrat',margin: "auto"}}>
     

        <SubMenu
         
          title="Categories"
          style={{color:"white",float:'right', display:'flex',marginLeft:"280px"
       ,
         }}
          icon={<DownOutlined  style={{float:"right", marginTop:"19px",marginLeft:"5px",fontSize:'10px'}}/>}
        >  
          <Item >Meat</Item>
          <Item >Seafood</Item>
          <Item >Vegetables</Item>
          <Item >Fruits</Item>
          <Item >food Ingredients</Item>
          <Item >Dairy</Item>
          <Item >Others</Item>
        </SubMenu>

        <SubMenu
         
         title="Blogs"
         style={{color:"white",
        }}
        //  icon={<DownOutlined  style={{float:"right", marginTop:"19px",marginLeft:"5px",fontSize:'10px'}}/>}
       >  <Item><Link to="/blog">blog1</Link></Item>
       </SubMenu>
       <SubMenu
         
         title="FAQs"
         style={{color:"white",
        }}
        //  icon={<DownOutlined  style={{float:"right", marginTop:"19px",marginLeft:"5px",fontSize:'10px'}}/>}
       >  
         <Item><Link to="/faq">faq</Link></Item>
       </SubMenu>

       <SubMenu
         
         title="Plans"
         style={{color:"white",
        }}
        //  icon={<DownOutlined  style={{float:"right", marginTop:"19px",marginLeft:"5px",fontSize:'10px'}}/>}
       >   <Item><Link to="/plan">Premium</Link></Item>
       </SubMenu>
    
       <SubMenu
         
         title="About Us"
         style={{color:"white",
       }}
        //  icon={<DownOutlined  style={{float:"right", marginTop:"19px",marginLeft:"5px",fontSize:'10px'}}/>}
       >   <Item><Link to="/about-us">About Us</Link></Item>
       </SubMenu>
       <SubMenu
         
          title="Rules & Policy"
          style={{color:"white",
          }}
          // icon={<DownOutlined  style={{float:"right", marginTop:"19px",marginLeft:"5px",fontSize:'10px'}}/>}
        >  
         <Item><Link to="/community-rules">Community Rules</Link></Item>
         <Item><Link to="/terms-service">Terms of Service</Link></Item>
        </SubMenu>
    
        <SubMenu
         
         title="Terms & Conditions"
         style={{color:"white",
         marginRight:"280px"
       }}
        //  icon={<DownOutlined  style={{float:"right", marginTop:"19px",marginLeft:"8px",fontSize:'10px'}}/>}
       >   <Item><Link to="/terms-condition">Terms & Conditions</Link></Item>
       </SubMenu>

       
  

      
    </Menu>

    </>
  );
};

export default Header;