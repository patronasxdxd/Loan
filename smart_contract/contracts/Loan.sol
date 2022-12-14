
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract loan {


    enum Loanstate {CREATED, FUNDED, TAKEN}

    struct Terms {
        uint256 loanDaiAmount;
        uint256 feeDaiAmount;
        uint256 ethCollateralAmount;
        uint256 repayByTimestamp;
    }

    //make map
    // Terms public terms;

   // mapping (address => Terms) terms;

    struct Loaning {

        Terms terms;
        address payable lender;
        address payable borrower;
        Loanstate state;
    }



   mapping (uint => Loaning) loans;

    


    //make map
    // Loanstate public state;



    modifier onlyInState(Loanstate expectedState) {
        require(state == expectedState, "not allowed in this state");
        _;
    }

    // address payable public lender;
    // address payable public borrower;

    IERC20 private DAI;
     address public tokenaddress;

    constructor(address _token) public {
            DAI = IERC20(_token);
            tokenaddress = _token;
        }


         Terms terms;
        address payable lender;
        address payable borrower;
        Loanstate state;

    function create(Terms memory _terms, address _daiAdress) public {

        loans[0] = Loaning(_terms,payable(msg.sender),payable(msg.sender),Loanstate.CREATED);
    
        
        // terms = _terms;
        // lender = payable(msg.sender);
        // state = Loanstate.CREATED;
    }

    function fundLoan() public onlyInState(Loanstate.CREATED) {

        state = Loanstate.FUNDED;
        DAI.transferFrom(
            msg.sender,
            address(this),
            terms.loanDaiAmount
        );

    }


    function takeALoanAndAcceptLoanTerms()
    public
    payable
    onlyInState(Loanstate.FUNDED){
        require(
            msg.value == terms.ethCollateralAmount,
            "invalid amount"
        );

        borrower = payable(msg.sender);
        state = Loanstate.TAKEN;
        DAI.transfer(borrower,terms.loanDaiAmount);

    }


//  function depositWithPermit(uint amount, uint deadline, uint8 v, bytes32 r, bytes32 s) external {
//         DAI.permit(msg.sender, address(this), amount, deadline, v, r, s);
//         DAI.transferFrom(msg.sender, address(this), amount);
//     }

    function repay() onlyInState(Loanstate.TAKEN) public{
        require(msg.sender == borrower, "only owner");

        DAI.transferFrom(
            borrower,
            lender,
            terms.loanDaiAmount + terms.feeDaiAmount
        );

        selfdestruct(borrower);
    }

    function liquidate() public onlyInState(Loanstate.TAKEN){
        require(msg.sender == lender);
        require(block.timestamp >= terms.repayByTimestamp, "cant before the date ");
        

        selfdestruct(lender);
     }

     function getState() public view returns (string memory) {

         if (loans[0].state == Loanstate.CREATED) {
             return "state: Created";
         }

         if (loans[0].state == Loanstate.FUNDED) {
             return "state: Funded";
         }
         else return "state: taken";
     }


}