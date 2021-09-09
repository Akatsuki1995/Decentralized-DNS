/**
Nous avons utilisé openzeppelin pour pouvoir utiliser des contracts 
qui ont passé plusieurs audits de sécurité (Destructible.sol,Ownable.sol,SafeMath.sol)
Mais, nous avons changé quelques lignes de code pour optimiser notre programme 
et pour s'adapter aux nouvelles versions de truffle et solidity
*/
pragma solidity >=0.4.22 <0.6.0;

import "./Ownable.sol";


/**
 * @title Destructible
 * @dev Base contract that can be destroyed by owner. All funds in contract will be sent to the owner.
 */
contract Destructible is Ownable {
  /**
   * @dev Transfers the current balance to the owner and terminates the contract.
   */
    function destroy(address payable _owner) public onlyOwner {
        selfdestruct(_owner);
    }

    function destroyAndSend(address payable _recipient) public onlyOwner {
        selfdestruct(_recipient);
    }
}