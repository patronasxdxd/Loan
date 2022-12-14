// //SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.7;
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// // import "./Loan.sol";
// import "./collateral.sol";


// contract Pool {

//     uint256 public poolAmount;
//     uint256 public borrowedAmount;
//     uint256 public depositedAmount;
//     mapping(address => uint) public balances;
//     address public admin;

//     mapping(address => uint256) private usersCollateral;
//     mapping(address => uint256) private usersBorrowed;

     
//     address public lender;
//     address public borrower;
//     IERC20 public token;
//     uint256 public collateralAmount;
//     uint256 public payoffAmount;
//     uint256 public dueDate;
    

// //change this to the contract;
//     IERC20 public constant patToken =
//         IERC20(0x5FbDB2315678afecb367f032d93F642f64180aa3);

//     // constructor() {
//     //     admin = msg.sender;
//     // }

//     constructor (
//         address _lender,
//         address _borrower,
//         IERC20 _token,
//         uint256 _collateralAmount,
//         uint256 _payoffAmount,
//         uint256 loanDuration
//     )public
//     {
//         lender = _lender;
//         borrower = _borrower;
//         token = _token;
//         collateralAmount = _collateralAmount;
//         payoffAmount = _payoffAmount;
//         dueDate = now + loanDuration;

//     }


//     function addDeposit() external payable {
//         require(msg.value != 0, "Cant add 0 ethers");
//         poolAmount += poolAmount + msg.value;
//         depositedAmount += depositedAmount + msg.value;
//         balances[msg.sender] += msg.value;
//     }

//     function checkBalance(address _address) external view returns (uint256) {
        
//         return balances[_address];
//     }




    






























// }
