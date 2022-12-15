//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
// import "./interfaces/ISwapRouter.sol";


//removed math
contract PatronasToken is ERC20, ERC20Burnable, Ownable {

    uint public constant mintPrice = (4 ether/10);

    constructor() public ERC20("Loan", "PAT") {
        _mint(msg.sender, 10000000000);
    }

    function mint(address account, uint256 amount) external{
        _mint(account, amount);
    }
    function burn(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }  

    
}