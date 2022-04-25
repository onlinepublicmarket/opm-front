import { useState } from "react";
import axios from "axios";

const Tryyy = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description,setDescription] = useState("");
  const [address,setAddress] = useState("");
  const [images,setImage] =useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { data } = await axios.get(`${process.env.REACT_APP_API}/user-get`);
    console.log("REGISTER RESPONSE", data);
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">tryy</h1>

     
    </>
  );
};

export default Tryyy;