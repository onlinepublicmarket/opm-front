import React, { useEffect, useState } from "react";
import { Card, Tabs, Tooltip } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselContainerS from '../components/CarouselContainerS';
import Footer from '../components/Footer';
import CategoryGrid from '../components/CategoryGrid';
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import subs from '../assets/images/welcome.jpg';
import { Menu, Badge } from "antd";

const { SubMenu, Item } = Menu;
const SellerShop = () => {


  return (
    <>
       {/* <div style={{padding:"75px"}}></div> */}
      <div > 
      <CarouselContainerS style={{margin:"20px"}}/> 
      </div>
      <br/>
      {/* <CategoryGrid /> */}
<div className="row">
      <div className="col-md-7">

      <Carousel showArrows={true} autoPlay infiniteLoop>
                <img src={subs}  />
              </Carousel>
          
      </div>
      <div className="col-md-5">
            <h1 style={{backgroundColor:"#8BC34A",color:"white",paddingTop:"5px",fontFamily:"Montserrat",padding:"10px"}}>Welcome to my shop </h1> 
                    <p style={{fontFamily:"Montserrat"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum, elit in sodales tristique, mauris erat tincidunt ligula, non dignissim ipsum ex feugiat sapien.
              Aenean eleifend lacus vel libero tincidunt, quis ullamcorper risus consequat. Sed id molestie lorem, id faucibus quam. Vivamus mollis justo at felis ullamcorper, ut aliquet mauris eleifend. Aliquam interdum sem a massa scelerisque, vel efficitur sem maximus. Cras sollicitudin diam eget leo mollis lacinia. 
              Morbi at congue justo, a convallis nulla. Sed pulvinar massa sit amet consequat ultrices. Cras eu ligula ac velit vestibulum sollicitudin a id felis. Donec viverra ullamcorper sapien, at fringilla ex ultrices ut. Phasellus faucibus euismod velit hendrerit accumsan. Ut ac leo gravida mauris aliquam vulputate.
              Curabitur sed ultrices turpis, molestie consectetur neque.</p>
            </div>
</div>
      
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron blue" style={{backgroundColor:"#f5faf0", marginRight: "20px",
  marginLeft: "20px"}}>
       <b style={{color:"#7C9D39", fontFamily:"Montserrat"}}> Latest Products</b>
      </h4>
      <NewArrivals />
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron" style={{backgroundColor:"#f5faf0", marginRight: "20px",
  marginLeft: "20px"}}>
      <b style={{color:"#7C9D39", fontFamily:"Montserrat"}}> Best Sellers</b>
      </h4>
      <BestSellers />

      <br />
     
      <br />
      <Footer />
    </>
  );
};

export default SellerShop;