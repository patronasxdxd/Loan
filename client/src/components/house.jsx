import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {Helmet} from "react-helmet";



const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />

);

const house = () => {
  const {  sendTransaction, formData } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();


  };

 
  


  

  return (

    <>
    <body></body>

       <Helmet>
       <script> showFox(); </script>
       </Helmet>
        
    
          <div id="logo-container" className="h-14 w-14"></div>
          
          </>
  );
};

export default house;
