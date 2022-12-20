import React, { useContext, useEffect } from "react";
import { Loader } from ".";
import { BoxContext } from "../context/BoxContext";
import styles from "/Users/gilleszwijsen/loan/client/src/css/mystyle.module.css"

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

const CreateLendContract = () => {
  const {  formDataLoan,handleChange,create,isLoading,createId} = useContext(BoxContext);


  const handleSubmit = (e) => {
    const { loanAmount, feeAmount, collAmount, timestamp } = formDataLoan;

    e.preventDefault();

    if (!loanAmount || !feeAmount || !collAmount || !timestamp) return;

    create();
  };

 
  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism ">
       <div className={styles.shadowxd2}>
     <h2 className="text-white text-3xl text-base text-center mx-2">Terms </h2>
     </div>
    <Input placeholder="enter a loan amount" name="loanAmount" type="number" handleChange={handleChange}/>
    <Input placeholder="Enter a fee amount" name="feeAmount" type="number" handleChange={handleChange} />
    <Input placeholder="Enter a collateral amount" name="collAmount" type="number" handleChange={handleChange} />
    <Input placeholder="Enter repayTimestamp" name="timestamp" type="number" handleChange={handleChange} />

    <div className="h-[1px] w-full bg-gray-400 my-2" />

    {createId != ""
    ? <h2 className="text-white text-base text-center mx-2">created a loan wit id: {createId} </h2>:""}
    {isLoading
      ? <Loader />
      : (
        
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white w-full text-xl mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Send now
        </button>
      )}


  </div>
  );
};

export default CreateLendContract;
