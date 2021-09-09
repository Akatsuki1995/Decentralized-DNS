/**
Nous avons utilisé openzeppelin pour pouvoir utiliser des contracts 
qui ont passé plusieurs audits de sécurité (Destructible.sol,Ownable.sol,SafeMath.sol)
Mais, nous avons changé quelques lignes de code pour optimiser notre programme 
et pour s'adapter aux nouvelles versions de truffle et solidity
*/
pragma solidity >=0.4.22 <0.6.0;


library SafeMath {
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        assert(c / a == b);
        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        //there is no case where this function can overflow/underflow
        uint256 c = a / b;
        return c;
    }
    
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }
    
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}