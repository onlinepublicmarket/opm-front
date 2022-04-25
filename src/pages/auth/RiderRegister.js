import { useState } from "react";
import axios from "axios";

const RiderRegister = ({history}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [images,setImage] =useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { data } = await axios.post(`${process.env.REACT_APP_API}/rider-register`, {
      name,
      email,
      address,
      images
    });
    console.log("REGISTER RESPONSE", data);
    history.push("/thank-you");
  };

  return (
    <>
      <h1 style={{backgroundColor:"#9CCC65",color:"white",position:"center"}} className="container col-md-4 offset-md-4 pb-5">Rider Registration</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className=" mb-4 p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your complete name"
            required
            style={{  height: "45px",
            width: "100%",
            outline:" none",
            fontSize: "16px",
            borderRadius: "5px",
            paddingLeft: "15px",
            border: "1px solid #ccc",
           
            transition: "all 0.3s ease"}}
          />

          <input
            type="email"
            className=" mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your valid email"
            required
            style={{  height: "45px",
            width: "100%",
            outline:" none",
            fontSize: "16px",
            borderRadius: "5px",
            paddingLeft: "15px",
            border: "1px solid #ccc",
           
            transition: "all 0.3s ease"}}
          />

          

           <input
            type="text"
            className=" mb-4 p-4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="address"
            required
            style={{  height: "45px",
            width: "100%",
            outline:" none",
            fontSize: "16px",
            borderRadius: "5px",
            paddingLeft: "15px",
            border: "1px solid #ccc",
           
            transition: "all 0.3s ease"}}
          />
          <label>Pictures of License ID</label>
           <label className="btn btn-primary btn-raised btn-success mt-3">
          Choose File
          <input
            type="file"
            value={images}
            multiple
            hidden
            accept="images/*"
            onChange={(e) => setImage(e.target.value)}
            placeholder="Pictures of business permit, if there any"
          />
        </label> <br/>
          <button type="submit" className="btn btn-success btn-block mt-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RiderRegister;