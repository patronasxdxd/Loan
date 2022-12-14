/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Loan, LoanInterface } from "../Loan";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "loanDaiAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeDaiAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ethCollateralAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "repayByTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct loan.Terms",
        name: "_terms",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_daiAdress",
        type: "address",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getState",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "repay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "takeALoanAndAcceptLoanTerms",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenaddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516109f53803806109f583398101604081905261002f9161005e565b600180546001600160a01b039092166001600160a01b031992831681179091556002805490921617905561008e565b60006020828403121561007057600080fd5b81516001600160a01b038116811461008757600080fd5b9392505050565b6109588061009d6000396000f3fe6080604052600436106100705760003560e01c8063402d88831161004e578063402d8883146100ef5780634c4b28f6146101045780638db579941461010c578063f09b1eb41461012157600080fd5b80631865c57d1461007557806328a07025146100a05780633feff76d146100b7575b600080fd5b34801561008157600080fd5b5061008a610141565b604051610097919061085a565b60405180910390f35b3480156100ac57600080fd5b506100b5610254565b005b3480156100c357600080fd5b506002546100d7906001600160a01b031681565b6040516001600160a01b039091168152602001610097565b3480156100fb57600080fd5b506100b561030a565b6100b5610454565b34801561011857600080fd5b506100b5610583565b34801561012d57600080fd5b506100b561013c3660046107c6565b610615565b60606000808080526020527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fba54600160a01b900460ff1660028111156101895761018961090c565b14156101b8575060408051808201909152600e81526d1cdd185d194e8810dc99585d195960921b602082015290565b600160008080526020527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fba54600160a01b900460ff1660028111156101ff576101ff61090c565b141561022d575060408051808201909152600d81526c1cdd185d194e88119d5b991959609a1b602082015290565b5060408051808201909152600c81526b39ba30ba329d103a30b5b2b760a11b602082015290565b600280600854600160a01b900460ff1660028111156102755761027561090c565b1461029b5760405162461bcd60e51b8152600401610292906108af565b60405180910390fd5b6007546001600160a01b031633146102b257600080fd5b6006544210156102fc5760405162461bcd60e51b8152602060048201526015602482015274031b0b73a103132b337b932903a3432903230ba329605d1b6044820152606401610292565b6007546001600160a01b0316ff5b600280600854600160a01b900460ff16600281111561032b5761032b61090c565b146103485760405162461bcd60e51b8152600401610292906108af565b6008546001600160a01b0316331461038f5760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b6044820152606401610292565b6001546008546007546004546003546001600160a01b03948516946323b872dd9481169316916103be916108e6565b6040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401602060405180830381600087803b15801561040d57600080fd5b505af1158015610421573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610445919061079d565b506008546001600160a01b0316ff5b600180600854600160a01b900460ff1660028111156104755761047561090c565b146104925760405162461bcd60e51b8152600401610292906108af565b60055434146104d45760405162461bcd60e51b815260206004820152600e60248201526d1a5b9d985b1a5908185b5bdd5b9d60921b6044820152606401610292565b600880546001600160a81b0319163360ff60a01b191617600160a11b179081905560015460035460405163a9059cbb60e01b81526001600160a01b039384166004820152602481019190915291169063a9059cbb906044015b602060405180830381600087803b15801561054757600080fd5b505af115801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f919061079d565b5050565b600080600854600160a01b900460ff1660028111156105a4576105a461090c565b146105c15760405162461bcd60e51b8152600401610292906108af565b6008805460ff60a01b1916600160a01b1790556001546003546040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b03909116906323b872dd9060640161052d565b6040805160808101825283815233602080830182815283850192835260006060808601828152828052918452855180517fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5908155948101517fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb655968701517fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb75595909501517fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb855517fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb980546001600160a01b039283166001600160a01b03199182161790915592517fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fba805491909216938116841782559451939491939290916001600160a81b03191617600160a01b8360028111156107765761077661090c565b021790555050505050565b80356001600160a01b038116811461079857600080fd5b919050565b6000602082840312156107af57600080fd5b815180151581146107bf57600080fd5b9392505050565b60008082840360a08112156107da57600080fd5b60808112156107e857600080fd5b506040516080810181811067ffffffffffffffff8211171561081a57634e487b7160e01b600052604160045260246000fd5b8060405250833581526020840135602082015260408401356040820152606084013560608201528092505061085160808401610781565b90509250929050565b600060208083528351808285015260005b818110156108875785810183015185820160400152820161086b565b81811115610899576000604083870101525b50601f01601f1916929092016040019392505050565b60208082526019908201527f6e6f7420616c6c6f77656420696e207468697320737461746500000000000000604082015260600190565b6000821982111561090757634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220e71766c893dbfc1a7e7070fc6882028b409c18462d53ed3c3f6f820da691689564736f6c63430008070033";

type LoanConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LoanConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Loan__factory extends ContractFactory {
  constructor(...args: LoanConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Loan> {
    return super.deploy(_token, overrides || {}) as Promise<Loan>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): Loan {
    return super.attach(address) as Loan;
  }
  connect(signer: Signer): Loan__factory {
    return super.connect(signer) as Loan__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LoanInterface {
    return new utils.Interface(_abi) as LoanInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Loan {
    return new Contract(address, _abi, signerOrProvider) as Loan;
  }
}