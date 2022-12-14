import React, { useContext } from "react";
import logo from "../../images/logo.png";
import { BoxContext } from "../context/BoxContext";


import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";




const Input = ({ placeholder, name, type, value, handleChangeVote }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChangeVote(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );


const Vote = () => {

    const { currentAccount, currentProposal,connectWallet, handleChangeVote, sendTransaction, formData, isLoading,propose, proposalId,vote,voteData,isLoadingVote } = useContext(BoxContext);

    const handleSubmit = (e) => {
        const { values , reason} = voteData;
    
        e.preventDefault();
    
        if ( !values || !reason) return;
    
        vote();
      };

    

      return (

        

        
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">
        
        {proposalId === 1
                  ?   <span class="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm">Vote now
                  <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                  </svg>
              </span>
                  : (
                    <h2 >
              
                     
                      
                    </h2>
                  )}
          
         
          {/* <h2 className="text-white text-base text-center mx-2"> Vote: </h2> */}
              
              <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                <Input placeholder="yes(1) or no(2)" name="values" type="number" handleChangeVote={handleChangeVote} />
                <Input placeholder="reason" name="reason" type="text" handleChangeVote={handleChangeVote} />

              
    
                <div className="h-[1px] w-full bg-gray-400 my-2" />
    
                {isLoadingVote
                  ? <Loader />
                  : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                    >
                      Send now
                    </button>
                  )}
           
          
          </div>

        {/* <div className="text-white text-base text-center mx-2">
          {proposalId}
          {currentProposal}

      
      
        </div> */}
        {proposalId === 4
                  ?  <h2 className="text-white text-base text-center mx-2">
              
                 you've Voted!
                  
                </h2>
                  : (
                    <h2 >
              
                     
                      
                    </h2>
                  )}
          
    
          
        </div>

      );
                 
   


};

export default Vote;
