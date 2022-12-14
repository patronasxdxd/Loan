
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract loan {


      modifier onlyInState(Loanstate expectedState, uint _count) {
        require(loans[_count].state == expectedState, "not allowed in this state");
        _;
    }

    enum Loanstate {CREATED, FUNDED, TAKEN}

    struct Terms {
        uint256 loanDaiAmount;
        uint256 feeDaiAmount;
        uint256 ethCollateralAmount;
        uint256 repayByTimestamp;
    }

    struct Loaning {

        Terms terms;
        address payable lender;
        address payable borrower;
        Loanstate state;
    }


   mapping (uint => Loaning) loans;

    uint public count =0;
    IERC20 private DAI;
     address public tokenaddress;



    constructor(address _token) public {
            DAI = IERC20(_token);
            tokenaddress = _token;
        }


    
    function create(Terms memory _terms, address _daiAdress) public returns (uint) {

        loans[count] = Loaning(_terms,payable(msg.sender),payable(msg.sender),Loanstate.CREATED);
        return count++;
    }

    function fundLoan(uint count) public onlyInState(Loanstate.CREATED,count) {

        loans[count].state = Loanstate.FUNDED;
        DAI.transferFrom(
            msg.sender,
            address(this),
            loans[count].terms.loanDaiAmount
        );

    }


    function takeALoanAndAcceptLoanTerms(uint count)
    public
    payable
    onlyInState(Loanstate.FUNDED,count){
        require(
            msg.value == loans[count].terms.ethCollateralAmount,
            "invalid amount"
        );

        loans[count].borrower = payable(msg.sender);
        loans[count].state = Loanstate.TAKEN;
        DAI.transfer(loans[0].borrower,loans[count].terms.loanDaiAmount);

    }

    function repay(uint count) onlyInState(Loanstate.TAKEN,count) public{
        require(msg.sender == loans[count].borrower, "only owner");

        DAI.transferFrom(
           loans[count].borrower,
            loans[count].lender,
            loans[count].terms.loanDaiAmount + loans[count].terms.feeDaiAmount
        );

        selfdestruct(loans[count].borrower);
    }

    function liquidate(uint count) public onlyInState(Loanstate.TAKEN,count){
        require(msg.sender == loans[count].lender);
        require(block.timestamp >= loans[count].terms.repayByTimestamp, "cant before the date ");
        

        selfdestruct(loans[count].lender);
     }

     function getState(uint count) public view returns (string memory) {

         if (loans[count].state == Loanstate.CREATED) {
             return "state: Created";
         }

         if (loans[count].state == Loanstate.FUNDED) {
             return "state: Funded";
         }
         else return "state: taken";
     }

      function getCount() public view returns (uint) {

       return count;
     }




}