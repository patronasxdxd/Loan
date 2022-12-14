// pragma solidity ^0.8.7;
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// // import "./Pool.sol";


// contract collateral {

//     address public  borrower = msg.sender;
//     IERC20 public token;
//     uint256 public loanAmount;
//     uint256 public collateralAmount;
//     uint256 public payOffAmount;
//     uint256 public  duration;

    
//     function initLoan(
//         IERC20  _token,
//         uint256  _loanAmount,
//         uint256  _collateralAmount,
//         uint256  _payOffAmount,
//         uint256  _duration

//     ) public {
//         token = _token;
//         loanAmount = _loanAmount;
//         collateralAmount = _collateralAmount;
//         payOffAmount = _payOffAmount;
//         duration = _duration;
//     }


//      Pool public pool;

//     event LoanRequestAccepted(address pool);

//     function lendEther() public payable {
//         require(msg.value == loanAmount);
//         pool = new Pool(
//             msg.sender,
//             borrower,
//             token,
//             collateralAmount,
//             payOffAmount,
//             duration
//         );
//         require(token.transferFrom(borrower, pool, collateralAmount));
//         borrower.transfer(loanAmount);
//         emit LoanRequestAccepted(pool);
//     }


// }