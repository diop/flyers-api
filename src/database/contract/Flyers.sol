pragma solidity ^0.4.18;

/* Draft 1 of contract. */

contract Flyers {
    address owner;
    uint256 ownerAccount;
    mapping (address => uint256) businessAccount;

    modifier ownerOnly {
        require(msg.sender == owner);
        _;
    }

    function Flyers() public {
        owner = msg.sender;
    }

    function addBusinessPromotionRewards(uint256 rewardAmount) public payable {
        businessAccount[msg.sender] = rewardAmount;
    }

    function tenPercentCut(uint256 businessCut) public payable {
        ownerAccount += businessCut;
    }

    function disbursePayments(uint256 paymentCut, address business) public payable {
        uint256 newBusinessAccountBalance = businessAccount[business] - paymentCut;
        businessAccount[business] = newBusinessAccountBalance;
        msg.sender.transfer(paymentCut);
    }

    function ownerWithdraw(uint256 amount) public payable ownerOnly {
        require(ownerAccount >= amount);
        msg.sender.transfer(amount);
    }

    function selfdestruct(address owner) ownerOnly {
        selfdestruct(owner);
    }

    function () public payable {}
}
