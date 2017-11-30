pragma solidity ^0.4.18;

import './TRIPToken.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';

/**
 * @title Team and Advisors Token Allocation contract
 * @author Gustavo Guimaraes - <gustavoguimaraes@gmail.com>
 */

contract Vault {
    using SafeMath for uint;
    address public owner;
    uint256 public unlockedAt;
    uint256 public canSelfDestruct;

    TRIPToken public trip;

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    /**
     * @dev constructor function that sets owner and token for the Vault contract
     * @param _owner Contract owner
     * @param token Token contract address for TRIPToken
     */
    function Vault(address _owner, address token) public {
        trip = TRIPToken(token);
        unlockedAt = now.add(182 days);
        canSelfDestruct = now.add(365 days);
        owner = _owner;
    }

    /**
     * @dev Unlock tokens after waiting locking period is over.
     */
    function unlock() external {
        assert(now >= unlockedAt);
        uint256 balance = trip.balanceOf(this);
        
        // Will fail if allocation (and therefore toTransfer) is 0.
        require(trip.transfer(owner, balance));
    }

    /**
     * @dev allow for selfdestruct possibility and sending funds to owner
     */
    function kill() public onlyOwner {
        assert(now >= canSelfDestruct);
        uint256 balance = trip.balanceOf(this);

        if (balance > 0) {
            trip.transfer(owner, balance);
        }

        selfdestruct(owner);
    }
}
