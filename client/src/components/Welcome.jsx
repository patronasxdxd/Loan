import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";


const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center">
      {/* <div className={styles.shadowxd}>
             <h1 className="text-5xl sm:text-5xl">Loan Patronas token
          </h1>
          </div> */}
          
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}


        </div>
      </div>
    </div>
  );
};

export default Welcome;
