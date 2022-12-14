/* global ethers */
/* eslint prefer-const: "off" */

import * as fs from "fs"
import verify from "../helper-function"

import { ContractReceipt } from "ethers";
import { ethers, network } from "hardhat";
import { DiamondCutFacet, GovernanceToken } from "../typechain-types";
import {
  QUORUM_PERCENTAGE,
  VOTING_PERIOD, developmentChains,
  VOTING_DELAY, ADDRESS_ZERO
} from "../helper-hardhat-config"
import { GovernorContract } from "../typechain-types";
export let DiamondAddress: string;
export let governorContractAddress: string;
import { BoxFacet } from "../typechain-types";
import {PatronasToken}  from "../contracts/PatronasToken"
import {Pool}  from "../contracts/Pool"
import {loan} from "../contracts/loan"
// import {collateral}  from "../contracts/collateral"


//lender accepts the patronas ERC20 as colleteral
// The collateral amount, which is the unit amount of the token collateral.
// The loan amount, which is the amount of wei the borrower is borrowing.
// The payoff amount, which is the amount of wei that the borrower must pay to reclaim its tokens.
// The loan duration is the amount of time the borrower has pay off its loan after receiving the loan.



export async function deployLoan() {

  const accounts = await ethers.getSigners();
  const contractOwner = accounts[0];

  const PatronasToken = await ethers.getContractFactory("PatronasToken");
  const patronasToken = await PatronasToken.deploy();
  await patronasToken.deployed();
  console.log("token deployed:", patronasToken.address);

  const xd = (await ethers.getContractAt(
        "PatronasToken",
        patronasToken.address
      )) as PatronasToken;
    //  const transferTx = await xd.mint(contractOwner.address,100000)
     
  const Loanx = await ethers.getContractFactory("loan");
  const loan = await Loanx.deploy(patronasToken.address);
  await loan.deployed();
  console.log("loan deployed:", loan.address);

  // const Terms = {
   

  //       loanDaiAmount:200,
  //        feeDaiAmount:200,
  //        ethCollateralAmount:200,
  //        repayByTimestamp:200
  // }



  // const transfer = (await ethers.getContractAt(
  //       "loan",
  //       loan.address
  //     )) as loan;
  //   const create = await transfer.create(Terms,patronasToken.address)   


  //   var count = await transfer.getCount();
   
  //   count = count -1;
    
  //   const approve = await patronasToken.approve(loan.address,10000);
  //   const fund = await transfer.fundLoan(count);

  //   const takeALoanAndAcceptLoanTerms = await transfer.takeALoanAndAcceptLoanTerms(count,{value:200});

  //   const state = await transfer.getState(count);
  //   console.log(state);

}

if (require.main === module) {
  deployLoan()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

exports.deployLoan = deployLoan;
