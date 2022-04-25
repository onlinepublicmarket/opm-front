import React from 'react'
import AdminNav from "../../components/nav/AdminNav";

const Revenue = () => {
  return (
      <div className='container-fluid'>
               <div className='row'>
               <div className="col-md-2">
                     <AdminNav />
                     </div>
                <div className="col-md-10" >To receive payments, you are required to create account in  Stripe. Refer to the link below <div> <button><a target="_blank" href="https://dashboard.stripe.com/register">Link to Stripe</a></button></div></div>
               
               </div>
               
    </div>
  
  )
}

export default Revenue