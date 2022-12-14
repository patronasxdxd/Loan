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

  const [execData, setExecData] = useState({ proposal: "" });
  const [structArray, setStructArray] = useState([]);

  const [isLoadingExecute, setIsLoadingExecute] = useState(false);
  const [isLoadingVote, setIsLoadingVote] = useState(false);

  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  //const [transactions, setTransactions] = useState([]);
  const [boxvalues, setboxValues] = useState([]);
  const [proposalId, setProposalId] = useState([]);
  const [currentProposal, setCurrentProposal] = useState([]);
  const [voteTime, setvoteTime] = useState("");
  const [Blockchained, setBlockchained] = useState("");

  const [createId, setCreateId] = useState("");


  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };


  const handleChangeFund = (e, name) => {
    setformDataCount((prevState) => ({ ...prevState, [name]: e.target.value }));
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

  const fund = async () => {
    try {
      if (ethereum) {
        const { count } = formDataCount;




        const transactionsContract = createLoanContract();
        const EthtokenContract = createTokenContract();




         const approve = await EthtokenContract.approve(loanContract,10000);

         setIsLoading(true);
         const approveReceipt = await approve.wait(1)
          setIsLoading(false);


        const fund = await transactionsContract.fundLoan(count)   


          setIsLoading(true);
         const fundReceipt = await fund.wait(1)
          setIsLoading(false);

          

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };




  // const makeCards = async () => {
  //   loaded = true;
  //   try {
  //     if (ethereum) {
  //       const transactionsContract = createEthereumContract();

  //       const availableTransactions = await transactionsContract.getAllTransactions();

  //       const structuredTransactions = availableTransactions.map((transaction) => ({
  //         // addressFrom: transaction.sender,
  //         timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
  //         message: transaction.value,
  //         amount: transaction.amount.toNumber()
  //       }));

  //       //  console.log("here");

  //       setStructArray(structuredTransactions);
  //     } else {
  //       console.log("Ethereum is not present");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getAllTransactions = async () => {


  //   try {
  //     if (ethereum) {
  //       const transactionsContract = createEthereumContract();

  //       const availableTransactions = await transactionsContract.retrieve();


  //       setboxValues(availableTransactions.toNumber());
  //     } else {
  //       console.log("Ethereum is not present");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getProposalId = async () => {


  //   try {
  //     if (ethereum) {
  //       const transactionsContract = createEthereumContract();
  //       const govContract = createGovernorContract();

  //       const availableTransactions = await transactionsContract.getProposal();
  //       const state = await govContract.state(availableTransactions)


  //       setProposalId(state);




  //     } else {
  //       console.log("Ethereum is not present");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const checkSate = async () => {


  //   try {
  //     if (ethereum) {
  //       console.log("xd");





  //     } else {
  //       console.log("Ethereum is not present");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getCurrentProposal = async () => {


  //   try {
  //     if (ethereum) {
  //       const boxContract = createEthereumContract();

  //       const availableTransactions = await boxContract.getProposal();


  //       //setCurrentProposal(62568287157613061209260595334271840154113816132753167614645326);





  //     } else {
  //       console.log("Ethereum is not present");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };




  // const checkIfWalletIsConnect = async () => {
  //   try {
  //     if (!ethereum) return alert("Please install MetaMask.");

  //     const accounts = await ethereum.request({ method: "eth_accounts" });

  //     if (accounts.length) {
  //       setCurrentAccount(accounts[0]);

  //       if (!loaded) {
  //         makeCards();
  //       };
  //       getAllTransactions();
  //       getProposalId();
  //       getCurrentProposal();
  //       //checkSate();
  //     } else {
  //       console.log("No accounts found");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // checkIfWalletIsConnect();











  // const checkIfProposalExists = async () => {
  //   try {


  //     if (ethereum) {
  //       console.log("checking");
  //       const boxContract = createEthereumContract();
  //       const id = await boxContract.getProposal();
  //       console.log(id);
  //     }
  //   } catch (error) {
  //     console.log(error);

  //     throw new Error("No ethereum object");
  //   }
  // };













  // useEffect(() => {
  //   checkIfProposalExists();
  //   const interval = setInterval(() => getProposalId(), 1000);
  // }, [proposalId]);


  return (
    <BoxContext.Provider
      value={{
        
        formDataLoan,
        handleChange,
        create,
        isLoading,
        createId,
        formDataCount,
        fund,handleChangeFund

      }}
    >
      {children}
    </BoxContext.Provider>
  );
};
