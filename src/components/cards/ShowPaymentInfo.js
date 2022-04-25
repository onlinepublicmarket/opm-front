import React from "react";

const ShowPaymentInfo = ({ order,showStatus= true }) => (
  <div>
    <p>
      <span> <b>Order Id:</b> {order.paymentIntent.id}</span>   <br/>
      {"  "}
      <span>
        
      <b> Amount:</b>  {"  "}
        {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
          style: "currency",
          currency: "PHP",
        })}
      </span>   <br/>
      {"  "}
      <span><b>Currency:</b> {order.paymentIntent.currency.toUpperCase()}</span>   <br/>
      {"  "}
      <span><b>Method:</b> {order.paymentIntent.payment_method_types[0]}</span>   <br/>
      {"  "}
      <span><b>Payment:</b> {order.paymentIntent.status.toUpperCase()}</span>   <br/>
      {"  "}
      <span>
      <b>  Orderd on:</b>{"  "}
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      {"  "}
      <br/>
      {showStatus && (
        <span className="badge bg-primary text-white">
          STATUS: {order.orderStatus}
        </span>
      )}
    </p>
  </div>
);

export default ShowPaymentInfo;