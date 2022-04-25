import React, { useState } from "react";
import { Card, Tabs, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import subs from "../../assets/images/subs.png";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../functions/user";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import SellerShop from "../../pages/SellerShop";
import commentBox from 'commentbox.io';
const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProduct = ({ product, onStarClick, star }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  // router
  let history = useHistory();

  const { title, images, description, _id,seller } = product;

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Added to wishlist");
      history.push("/user/wishlist");
    });
  };

  const removeCommentBox = commentBox('5732218685095936-proj');
  
  return (
    <>
      <div className="col-md-7">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card cover={<img src={subs} className="mb-3 card-image" />}></Card>
        )}

        <Tabs type="card">
          <TabPane tab="Description" key="1" style={{fontFamily:"Montserrat"}}>
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2" style={{fontFamily:"Montserrat"}}>
           This product is always in good condition
          </TabPane>
        </Tabs>
        <br />
      </div>

      <div className="col-md-5" style={{backgroundColor:"#f5faf0"}}>
        <h1  style={{backgroundColor:"#8BC34A",color:"white",paddingTop:"5px",fontFamily:"Montserrat"}}>{title}</h1>

        {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="text-center pt-1 pb-3">No rating yet</div>
        )}

        <Card
          actions={[
            <Tooltip placement="top" title={tooltip}>
              <a onClick={handleAddToCart} disabled={product.quantity < 1} style={{fontFamily:"Montserrat"}}>
                <ShoppingCartOutlined className="text-success" />
                <br />
                {product.quantity < 1 ? "Out of Stock" : "Add To Cart"}
              </a>
            </Tooltip>,
            <a onClick={handleAddToWishlist} style={{fontFamily:"Montserrat"}}>
              <HeartOutlined className="text-success" /> <br /> Add to Wishlist
            </a>,
            <RatingModal>
              <StarRating
                name={_id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="green"
              />
            </RatingModal>,
          ]}
        >
          
          <ProductListItems product={product} />
        </Card>
      </div>
      <br/>
      <br/>
    <div style={{justifyContent:"space-between"}}>  <div><Link className="btn btn-raised btn-success" to={`/seller/${seller}`}>View Shop</Link> <Link className="btn btn-raised btn-success" to='/chat'>Chat Now</Link></div>
   <div>   </div></div>
    <div>  <div className="commentbox" /></div>
    
    </>
  );
};

export default SingleProduct;