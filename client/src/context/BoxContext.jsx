import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { loanContract , tokenContract} from "../utils/constants";

import { contractABIToken,contractABILoan } from "../utils/constants";


export const BoxContext = React.createContext();

const { ethereum } = window;
let loaded = false;

const createLoanContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const loanContractt = new ethers.Contract(loanContract, contractABILoan, signer);
  return loanContractt;
};

const createTokenContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const tokenContractt = new ethers.Contract(tokenContract, contractABIToken, signer);
  return tokenContractt;
};



export const BoxContentProvider = ({ children }) => {
  const [formDataLoan, setformData] = useState({ loanAmount: "", feeAmount: "", collAmount: "", timestamp: "" });
  const [formDataCount, setformDataCount] = useState({ count: ""});
  const [formDataState, setformDataState] = useState({Count: ""});

  const [received, setReceived] = useState("");
  const [execData, setExecData] = useState({ proposal: "" });
  const [structArray, setStructArray] = useState([]);

  const [isLoadingExecute, setIsLoadingExecute] = useState(false);
  const [isLoadingVote, setIsLoadingVote] = useState(false);
  const [isLoadingFund, setIsLoadingFund] = useState(false);
  const [isLoadingTaken, setILoadingTaken] = useState(false);

  const [takenBool, settakenBool] = useState("");
  const [funded, setFunded] = useState("");
  const [noFunds, setNoFunds] = useState("");

  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  //const [transactions, setTransactions] = useState([]);
  const [boxvalues, setboxValues] = useState([]);
  const [proposalId, setProposalId] = useState([]);
  const [currentProposal, setCurrentProposal] = useState([]);
  const [voteTime, setvoteTime] = useState("");
  const [Blockchained, setBlockchained] = useState("");
  const [state, setState] = useState("");

  const [createId, setCreateId] = useState("");


  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };


  const handleChangeFund = (e, name) => {
    setformDataCount((prevState) => ({ ...prevState, [name]: e.target.value }));
  };


  const handleChangeState = (e, name) => {
    setformDataState((prevState) => ({ ...prevState, [name]: e.target.value }));
  };


  const create = async () => {
    try {
      if (ethereum) {
        const { loanAmount, feeAmount, collAmount, timestamp } = formDataLoan;


        console.log(feeAmount);


        const transactionsContract = createLoanContract();



          const Terms = {
   

                loanDaiAmount: loanAmount,
                feeDaiAmount:feeAmount,
                ethCollateralAmount:collAmount,
               repayByTimestamp:timestamp
           }

          const create = await transactionsContract.create(Terms,tokenContract)   


          setIsLoading(true);
         const proposeReceipt = await create.wait(1)
          setIsLoading(false);

          let count = await transactionsContract.getCount();

          setCreateId(count-1);
          console.log(count-1);

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const Mint = async () => {
    try {
      if (ethereum) {

        const EthtokenContract = createTokenContract();

        const accounts = await ethereum.request({ method: "eth_accounts" });


        const transfer = await EthtokenContract.mint(accounts[0],1)
        transfer.wait(1);
        setReceived(1);


  } else {
    console.log("No ethereum object");
  }
} catch (error) {
  console.log(error);

  throw new Error("No ethereum object");


};
  };


  const fund = async () => {
    try {
      if (ethereum) {
        const { count } = formDataCount;
        const transactionsContract = createLoanContract();
        const EthtokenContract = createTokenContract();

     
         const approve = await EthtokenContract.approve(loanContract,10000);

         setIsLoadingFund(true);
         const approveReceipt = await approve.wait(1)
         setIsLoadingFund(false);


        const fund = await transactionsContract.fundLoan(count)   


        setIsLoadingFund(true);
         const fundReceipt = await fund.wait(1)
         setIsLoadingFund(false);


          setFunded(1);

          

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      setNoFunds(1);
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
  

  const getState = async () => {

    const { count } = formDataState;


    const transactionsContract = createLoanContract();


    const fund = await transactionsContract.getState(count)   

    console.log(fund);

    setState(fund);




  }


  const takeLoan = async () => {
    try {
      if (ethereum) {
        const { count } = formDataCount;
        const transactionsContract = createLoanContract();
        // const EthtokenContract = createTokenContract();


        //  const approve = await EthtokenContract.approve(loanContract,10000);

        const fund = await transactionsContract.getState(count)   

       console.log(fund);

        const takeALoanAndAcceptLoanTerms = await transactionsContract.takeALoanAndAcceptLoanTerms(count,{value:1});

          setILoadingTaken(true);
         const fundReceipt = await takeALoanAndAcceptLoanTerms.wait(1)
          setILoadingTaken(false);

          settakenBool(1)


      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  return (
    <BoxContext.Provider
      value={{
        
        formDataLoan,
        handleChange,
        create,
        isLoading,
        createId,
        formDataCount,
        fund,handleChangeFund,
        getState,
        state,
        handleChangeState,
        formDataState,
        takeLoan,
        isLoadingFund,
        isLoadingTaken,
        takenBool,
        funded,
        Mint,
        received,
        noFunds

      }}
    >
      {children}
    </BoxContext.Provider>
  );
};
