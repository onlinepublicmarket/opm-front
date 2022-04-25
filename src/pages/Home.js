import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CarouselContainer from '../components/CarouselContainer';
import Footer from '../components/Footer';
import CategoryGrid from '../components/CategoryGrid';
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import subs from '../assets/images/welcome.jpg';
import sub1 from '../assets/images/CUPON_3.png';
import sub2 from '../assets/images/CUPON 2.png';
import sub3 from '../assets/images/CUPON 1.png';
import HomeAdd from "../components/HomeAdd";
const Home = () => {


  return (
    <>
   {/* <div style={{padding:"75px"}}></div> */}
      
   
      <CarouselContainer style={{margin:"20px"}}/> 
      
      <br/>
{/* <HomeAdd />  <br/> */}
      {/* <CategoryGrid /> */}
      <h4 className="text-center p-3 mt-5 mb-5 display-4" style={{backgroundColor:"#f5faf0", marginRight: "20px",
  marginLeft: "20px"}}>
       <b style={{color:"#7C9D39", fontFamily:"Montserrat"}}> Latest Products</b>
      </h4>
      <NewArrivals />
      <h4 className="text-center p-3 mt-5 mb-5 display-4 " style={{backgroundColor:"#f5faf0", marginRight: "20px",
  marginLeft: "20px"}}>
      <b style={{color:"#7C9D39", fontFamily:"Montserrat"}}> Best Sellers</b>
      </h4>
      <BestSellers />
      <h4 className="text-center p-3 mt-5 mb-5 display-4" style={{backgroundColor:"#f5faf0", marginRight: "20px",
  marginLeft: "20px"}}>
        <b style={{color:"#7C9D39", fontFamily:"Montserrat"}}> Categories</b>
      </h4>
      <CategoryList />
      <h4 className="text-center p-3 mt-5 mb-5 display-4 " style={{backgroundColor:"#f5faf0", marginRight: "20px",
  marginLeft: "20px"}}>
     <b style={{color:"#7C9D39", fontFamily:"Montserrat"}}> Sub Categories</b>
      </h4>
      <SubList />

      <br />
      <h4 className="text-center p-3 mt-5 mb-5 display-4 " style={{backgroundColor:"#f5faf0", marginRight: "20px",
  marginLeft: "20px"}}>
     <b style={{color:"#7C9D39", fontFamily:"Montserrat"}}> Coupons</b>
      </h4>
    <div style={{width: "auto", 
textAlign: "center",  
padding: "15px", 
 }}>  <img style={{maxWidth: "100%",  
height: "auto",borderRadius:"11px"  }}
 src={sub1}/></div>
      <br />
     <div style={{width: "auto", 
textAlign: "center",  
padding: "15px", 
  }}> <img style={{maxWidth: "100%", borderRadius:"11px" , 
height: "auto"  }}
 src={sub2}/></div>
      <br/>
    <div style={{width: "auto", 
textAlign: "center",  
padding: "15px", 
 }}>  <img style={{maxWidth: "100%",  borderRadius:"11px" ,
height: "auto"  }}
 src={sub3}/></div>
    <br/>
      <Footer />
    </>
  );
};

export default Home;