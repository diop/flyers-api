var abi = [
  {
    constant: false,
    inputs: [
      {
        name: "rewardAmount",
        type: "uint256"
      }
    ],
    name: "addBusinessPromotionRewards",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "paymentCut",
        type: "uint256"
      },
      {
        name: "business",
        type: "address"
      }
    ],
    name: "disbursePayments",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "ownerWithdraw",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address"
      }
    ],
    name: "selfdestruct",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "businessCut",
        type: "uint256"
      }
    ],
    name: "tenPercentCut",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  }
];

var Client = web3.eth.contract(abi);
var client = Client.at("0xf077c8d742e267b66e7c7a5bf9a9e54297c247eb");

function handleBusinessSmartContractUpdate() {
  var rewards = document.getElementById('totalRewards').value;
  var rewardsEth = rewards * .9;
  var platformEth = rewards * .1;

  client.addBusinessPromotionRewards(rewardsEth, {
    gas: 30000,
    from: web3.eth.accounts[0],
    value: web3.toWei(0.01, 'ether')
  }, (err, transactionHash) => {
    console.log('transactionHash', transactionHash)
  })

  client.tenPercentCut(platformEth, {
    gas: 30000,
    from: web3.eth.accounts[0],
    value: web3.toWei(0.01, 'ether')
  }, (err, transactionHash) => {
    console.log('transactionHash', transactionHash)
  })
}

function disbursePaymentToPromoter() {
  const promoterCut = .05 // in ether
  const businessSmartContractAddress = '0xf077c8d742e2683de7c7a5bf9a4e84297c247eb' // smart contract address for promoting event

  client.disbursePayments(promoterCut, businessSmartContractAddress, {
    gas: 30000,
    from: web3.eth.accounts[0],
    value: web3.toWei(0.01, 'ether')
  }, (err, transactionHash) => {
    console.log('transactionHash', transactionHash)
  })
}
