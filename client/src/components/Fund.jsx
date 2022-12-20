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

const Fund = () => {
  const {  formDataState,formDataCount,handleChange,fund,isLoadingFund,createId,handleChangeFund,state,handleChangeState,getState,funded,noFunds} = useContext(BoxContext);


  const handleSubmit = (e) => {
    const { count } = formDataCount;

    e.preventDefault();

    if (!count) return;

    fund();
  };

  const handleSubmitState = (e) => {
    const { count } = formDataState;

    e.preventDefault();

    if (!count) return;

    getState();
  };

 
  return (

    <div>
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
    <div className={styles.shadowxd2}>
     <h2 className="text-white text-3xl text-base text-center mx-2">Fund  </h2>
     </div>
    <Input placeholder="enter the loan number" name="count" type="number" handleChange={handleChangeFund} />

    <div className="h-[1px] w-full bg-gray-400 my-2" />

    {noFunds != ""
    ? <div className={styles.shadowxd2}><h2 className="text-white text-3xl text-base text-center mx-2" >No patronasToken found, please request funds from faucet</h2></div> : ""}
 

    {funded != ""
    ? <h2 className="text-white text-base text-center mx-2">succesfully funded! {createId} </h2>:""}
    {isLoadingFund
      ? <Loader />
      : (
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white text-xl w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Fund
        </button>
      )}

      


</div>


<br></br>
<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">


<div className={styles.shadowxd2}>
<h2 className="text-white text-3xl text-base text-center mx-2">Get Current State </h2>
</div>
    <Input placeholder="enter the loan number" name="count" type="number" handleChange={handleChangeState} />
  

    <div className="h-[1px] w-full bg-gray-400 my-2" />

    
    
    

    {state != ""
    ? <h2 className="text-white text-base text-center mx-2">the state is: {state} </h2>:""}
    {isLoadingFund
      ? <Loader />
      : (
        <button
          type="button"
          onClick={handleSubmitState}
          className="text-white text-xl w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Get State
        </button>
      )}
  </div>
  </div>
  );
};

export default Fund;
