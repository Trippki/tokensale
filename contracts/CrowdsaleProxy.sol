pragma solidity 0.4.18;

import "./TRIPCrowdsale.sol";

/**
 * @title Crowdsale proxy - used for testing purposes only
 */
contract CrowdsaleProxy {
    TRIPCrowdsale public crowdsale;

    function CrowdsaleProxy(address _crowdsale) public {
        require(_crowdsale != address(0));
        crowdsale = TRIPCrowdsale(_crowdsale);
    }

    function buyTokensProxy(address beneficiary) public payable {
        crowdsale.buyTokens(beneficiary);
    }
}
