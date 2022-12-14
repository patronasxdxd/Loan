import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABIBox, BoxFacet, GovenorContract, contractABIGovernor, DiamondAddress, contractABIGovToken, timeLockAddress, contractABITimeLock, GovernanceToken } from "../utils/constants";
import { id } from "ethers/lib/utils";

export const BoxContext = React.createContext();

const { ethereum } = window;
let loaded = false;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const boxContract = new ethers.Contract(DiamondAddress, contractABIBox, signer);
  return boxContract;

};

const createGovenorToken = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const govContract = new ethers.Contract(DiamondAddress, contractABIGovToken, signer);
  return govContract;
};

const createGovernorContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const govContract = new ethers.Contract(GovenorContract, contractABIGovernor, signer);
  return govContract;
};

export const BoxContentProvider = ({ children }) => {
  const [formData, setformData] = useState({ target: "", values: "", calldatas: "", description: "" });
  const [voteData, setvoteData] = useState({ proposal: "", values: "", reason: "" });
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


  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const handleChangeExecute = (e, name) => {
    setExecData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const handleChangeVote = (e, name) => {
    setvoteData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };



  const makeCards = async () => {
    loaded = true;
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          // addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.value,
          amount: transaction.amount.toNumber()
        }));

        //  console.log("here");

        setStructArray(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTransactions = async () => {


    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.retrieve();


        setboxValues(availableTransactions.toNumber());
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProposalId = async () => {


    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const govContract = createGovernorContract();

        const availableTransactions = await transactionsContract.getProposal();
        const state = await govContract.state(availableTransactions)


        setProposalId(state);




      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkSate = async () => {


    try {
      if (ethereum) {
        console.log("xd");





      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentProposal = async () => {


    try {
      if (ethereum) {
        const boxContract = createEthereumContract();

        const availableTransactions = await boxContract.getProposal();


        //setCurrentProposal(62568287157613061209260595334271840154113816132753167614645326);





      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };




  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        if (!loaded) {
          makeCards();
        };
        getAllTransactions();
        getProposalId();
        getCurrentProposal();
        //checkSate();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  checkIfWalletIsConnect();




  const execute = async () => {
    try {
      if (ethereum) {

        const governor = createGovernorContract();
        const boxContract = createEthereumContract();
        const govenorToken = createGovenorToken();







        console.log("executing...e")
        console.log(await governor.votingPeriod());

        // console.log(go)
        const proposalState = await governor.state(boxContract.getProposal());
        console.log(`Current Proposal States: ${proposalState}`);



        let valueData = 0;
        let descriptionData = "";

        const value = await boxContract.getAllTransactions();
        const count = await boxContract.getTransactionCount();
        if (count > 0) {
          valueData = value[count - 1].amount.toNumber();
          descriptionData = value[count - 1].value;

        }



        const encodedFunctionCall = boxContract.interface.encodeFunctionData("store", [valueData])
        console.log("part2");
        console.log(valueData);
        console.log(descriptionData);




        const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(descriptionData))
        console.log(descriptionHash)



        if (proposalState == 4) {
          console.log("status5")
          console.log("Queueing...")
          const queueTx = await governor.queue([DiamondAddress], [0], [encodedFunctionCall], descriptionHash)
          setIsLoadingExecute(true);

          await queueTx.wait(1);
          setIsLoadingExecute(false);

        }

        if (proposalState == 5) {

          const executeTx = await governor.execute(
            [DiamondAddress],
            [0],
            [encodedFunctionCall],
            descriptionHash
          )
          setIsLoadingExecute(true);

          await executeTx.wait(1)
          setIsLoadingExecute(false);
          console.log(`Box value: ${await boxContract.retrieve()}`)

        }




        //setvoteTime("");




      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }

  };



  const propose = async () => {
    try {
      if (ethereum) {
        const { target, values, calldatas, description } = formData;

        const governorContract = createGovernorContract();
        const boxContract = createEthereumContract();

        const encodedFunctionCall = boxContract.interface.encodeFunctionData(calldatas, [values]);
        console.log(`Proposing ${calldatas} on ${boxContract.address} with ${values}`)
        console.log(`Proposal Description:\n  ${description}`)

        const proposeTx = await governorContract.propose(
          [DiamondAddress],
          [0],
          [encodedFunctionCall],
          description
        )


        setIsLoading(true);



        const proposeReceipt = await proposeTx.wait(1)
        setIsLoading(false);
        const proposalId = proposeReceipt.events[0].args.proposalId
        console.log(`Proposed with proposal ID:\n  ${proposalId}`)
        const proposalState = await governorContract.state(proposeReceipt.events[0].args.proposalId);

        console.log(`Current Proposal States: ${proposalState}`);
        const id = await boxContract.addProposalStruct(proposeReceipt.events[0].args.proposalId, values, description);
        setIsLoading(true);
        const addReceipt = await id.wait(1)
        setIsLoading(false);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }

  };



  const vote = async () => {
    try {
      if (ethereum) {
        const { values, reason } = voteData;

        const governor = createGovernorContract();
        const boxContract = createEthereumContract();

        // 0 = Against, 1 = For, 2 = Abstain for this example
        console.log("Voting...")
        const proposalState2 = await governor.state(boxContract.getProposal());
        console.log(`Current Proposal State: ${proposalState2}`)

        const voteTx = await governor.castVoteWithReason(boxContract.getProposal(), values, reason)
        setIsLoadingVote(true);
        const voteTxReceipt = await voteTx.wait(1)
        setIsLoadingVote(false);




      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
      console.log("no vote yet")
    }

  };










  const checkIfProposalExists = async () => {
    try {


      if (ethereum) {
        console.log("checking");
        const boxContract = createEthereumContract();
        const id = await boxContract.getProposal();
        console.log(id);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };













  useEffect(() => {
    checkIfProposalExists();
    const interval = setInterval(() => getProposalId(), 1000);
  }, [proposalId]);


  return (
    <BoxContext.Provider
      value={{
        boxvalues,
        setboxValues,
        handleChange,
        formData,
        currentAccount,
        propose,
        proposalId,
        voteData,
        handleChangeVote,
        handleChangeExecute,
        vote,
        voteTime,
        execute,
        execData,
        currentProposal,
        isLoading,
        isLoadingVote,
        isLoadingExecute,
        structArray

      }}
    >
      {children}
    </BoxContext.Provider>
  );
};
