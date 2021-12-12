//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockToken is ERC20 {
  constructor() ERC20('Mock Token', 'MTK') {
    _mint(msg.sender, 1 * 10 ** 18);
  }
}