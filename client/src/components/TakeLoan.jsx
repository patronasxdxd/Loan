import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";
import { BoxContext } from "../context/BoxContext";
import styles from "/Users/gilleszwijsen/loan/client/src/css/mystyle.module.css"


const Input = ({ placeholder, name, type, value, handleChange,Mint,received}) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />

);

const TakeLoan = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const {  formDataState,formDataCount,handleChange,fund,isLoadingTaken,createId,handleChangeFund,state,handleChangeState,getState,takeLoan,takenBool,Mint,received} = useContext(BoxContext);


  const handleSubmit = (e) => {
    const { count } = formDataCount;

    e.preventDefault();

    if (!count) return;

    takeLoan();
  };
 

  const handleSubmitMint = (e) => {
    
    

    Mint();
  };

  

 

 
  return (

    <div>
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
    <div className={styles.shadowxd2}>
     <h2 className="text-white text-3xl text-base text-center mx-2"> Take Loan  </h2>
     </div>
    <Input placeholder="enter the loan number" name="count" type="number" handleChange={handleChangeFund} />
    <div className="h-[1px] w-full bg-gray-400 my-2" />

    
    
    

    {takenBool != ""
    ? <h2 className="text-white text-base text-center mx-2">succesfully Taken! {createId} </h2>:""}
    {isLoadingTaken
      ? <Loader />
      : (
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white w-full text-xl mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Loan
        </button>
      )}


</div>
<br></br>
<div>



<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">

<div className={styles.shadowxd2}>
     <h2 className="text-white text-3xl text-base text-center mx-2"> Faucet PatronasTOKEN  </h2>
     </div>
    
    <div className="h-[1px] w-full bg-gray-400 my-2" />

    {received != ""
    ? <h2 className="text-white text-base text-center mx-2">succesfully received! </h2>:""}
   
        <button
          type="button"
          onClick={handleSubmitMint}
          className="text-white w-full text-xl mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Receive Now
        </button>
      
      


    </div>

    
    
 
 


  </div>
  
</div>
  

  
  );
};

export default TakeLoan;
