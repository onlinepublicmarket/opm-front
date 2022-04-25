import React, {useEffect,useState, lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import "./responsive.css";
import {ToastContainer} from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

import {auth} from './firebase';

import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";
import { async } from "@firebase/util";


const Login = lazy(()=>import("./pages/auth/Login"));
const Register = lazy(()=>import("./pages/auth/Register"));
const SellerRegister = lazy(()=>import("./pages/auth/SellerRegister"));
const RiderRegister = lazy(()=>import("./pages/auth/RiderRegister"));
const Home = lazy(()=>import("./pages/Home"));
const SellerShop = lazy(()=>import("./pages/SellerShop"));  
const Header = lazy(()=>import('./components/nav/Header'));
const SideDrawer = lazy(()=>import("./components/drawer/SideDrawer"));
const logsignNav = lazy(()=>import('./components/nav/Header'));
const ScrollButton = lazy(()=>import('./pages/ScrollButton'));
const RegisterComplete = lazy(()=>import('./pages/auth/RegisterComplete'));
const ForgotPassword = lazy(()=>import("./pages/auth/ForgotPassword"));
const History = lazy(()=>import("./pages/user/History"));
const UserRoute = lazy(()=>import("./components/routes/UserRoute"));
const AdminRoute = lazy(()=>import("./components/routes/AdminRoute"));
const Password = lazy(()=>import("./pages/user/Password"));
const Wishlist = lazy(()=>import("./pages/user/Wishlist"));
const AdminDashboard = lazy(()=>import("./pages/admin/AdminDashboard"));
const SuperAdminDashboard = lazy(()=>import("./pages/admin/SuperAdminDashboard"));
const CategoryCreate = lazy(()=>import("./pages/admin/category/CategoryCreate"));
const CategoryUpdate = lazy(()=>import("./pages/admin/category/CategoryUpdate"));
const SubCreate = lazy(()=>import("./pages/admin/sub/SubCreate"));
const SubUpdate = lazy(()=>import("./pages/admin/sub/SubUpdate"));
const ProductCreate = lazy(()=>import("./pages/admin/product/ProductCreate"));
const AllProducts = lazy(()=>import("./pages/admin/product/AllProducts"));
const ProductUpdate = lazy(()=>import("./pages/admin/product/ProductUpdate"));
const Product = lazy(()=>import("./pages/Product"));
const CategoryHome = lazy(()=>import("./pages/category/CategoryHome"));
const SubHome = lazy(()=>import("./pages/sub/SubHome"));
const Shop = lazy(()=>import("./pages/Shop"));
const Cart = lazy(()=>import("./pages/Cart"));
const Checkout = lazy(()=>import("./pages/Checkout"));
const CreateCouponPage = lazy(()=>import("./pages/admin/coupon/CreateCouponPage"));
const Revenue = lazy(()=>import("./pages/admin/Revenue"));
const Payment = lazy(()=>import("./pages/Payment"));
const Chat = lazy(()=>import("./components/Chat"));
const Comments = lazy(()=>import("./components/Comments"));
const HomeAdd = lazy(()=>import("./components/HomeAdd"));
const UserList = lazy(()=>import("./components/cards/UserList"));
const AboutUs = lazy(()=>import("./components/AboutUs"));
const blog = lazy(()=>import("./components/blog"));
const faq = lazy(()=>import("./components/faq"));
const plan = lazy(()=>import("./components/plan"));
const thankyou = lazy(()=>import("./components/thankyou"));
const termscon = lazy(()=>import("./components/termscon"));
const comrules = lazy(()=>import("./components/comrules"));
const termservice = lazy(()=>import("./components/termservice"));


const App = () => {
const dispatch = useDispatch()
// to check firebase auth state
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      const idTokenResult = await user.getIdTokenResult();
      console.log("user", user);

      currentUser(idTokenResult.token)
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
    }
  });
  // cleanup
  return () => unsubscribe();
}, [dispatch]);

  return (
    
 <Suspense fallback={
   <div className="col text-center p-5">Online public market loading...</div>
 }>

 <Header />
 <SideDrawer />

  {/* <UserList /> */}
  <ToastContainer />
  <ScrollButton />
  <Switch>
  <Route exact path="/" component={Home}/>  
  
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/register/complete" component={RegisterComplete}/>
      <UserRoute exact path="/seller" component={SellerRegister}/>
      <UserRoute exact path="/rider" component={RiderRegister}/>

      <Route exact path="/seller/:seller" component={SellerShop}/>
      <Route exact path="/forgot/password" component={ForgotPassword}/>
      <UserRoute exact path="/user/history" component={History} />
      <UserRoute exact path="/user/password" component={Password} />
      <UserRoute exact path="/user/wishlist" component={Wishlist} />
      <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
      <AdminRoute exact path="/admin/dashboard/super" component={SuperAdminDashboard} />
      <AdminRoute exact path="/admin/category" component={CategoryCreate} />
      <AdminRoute
          exact
          path="/admin/category/:slug"
          component={CategoryUpdate}
        />
          <AdminRoute exact path="/admin/sub" component={SubCreate} />
          <AdminRoute exact path="/admin/sub/:slug" component={SubUpdate} />
          <AdminRoute exact path="/admin/product" component={ProductCreate} />
          <AdminRoute exact path="/admin/products" component={AllProducts} /> 
          <AdminRoute
          exact
          path="/admin/product/:slug"
          component={ProductUpdate}
        />
         <Route exact path="/product/:slug" component={Product} />
         <Route exact path="/category/:slug" component={CategoryHome} />
         <Route exact path="/sub/:slug" component={SubHome} />
         <Route exact path="/shop" component={Shop} />
         <Route exact path="/cart" component={Cart} />
         <UserRoute exact path="/checkout" component={Checkout} />
         <AdminRoute exact path="/admin/coupon" component={CreateCouponPage} />
         <AdminRoute exact path="/admin/revenue" component={Revenue} />
         <UserRoute exact path="/payment" component={Payment} />
         <UserRoute exact path="/chat" component={Chat}/>
         <Route exact path="/users" component={UserList} />
         <Route exact path="/comments" component={Comments} />

         <Route exact path="/about-us" component={AboutUs}/>
         <Route exact path="/blog" component={blog}/>
         <Route exact path="/faq" component={faq}/>
         <Route exact path="/plan" component={plan}/>
         <Route exact path="/thank-you" component={thankyou}/>
         <Route exact path="/terms-condition" component={termscon}/>
         <Route exact path="/community-rules" component={comrules}/>
         <Route exact path="/terms-service" component={termservice}/>
  </Switch>

 </Suspense>
  );
};

//slug->fetch, grab the specific category
export default App;
