const { ethers } = require("ethers");

// TESTNET PROVIDER
const providerTestnet = new ethers.providers.JsonRpcProvider(
"https://sepolia.infura.io/v3/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"


);

// CREATE SIGNER
const myAddress = "0x<my address of my metamask account>";
const privateKey = "d<private key for my metamask account>5";
const walletSigner = new ethers.Wallet(privateKey, providerTestnet);

const exchangeETH = async () => {
  const sendValueHuman = "5.5";
  const gasPrice = await providerTestnet.getGasPrice();
  const nonce = 138; // web3.eth.getTransactionCount(myAddress)

    


  const txBuild = {
	from: myAddress, // from,
to: "0x49777F12663f2040913414b895F2a7a599c56Fd0",
 // to (WETH on sepolia testnet Network),
    value: ethers.utils.parseEther(sendValueHuman), // value,
    nonce: nonce, // nonce,
    gasLimit: 100000, // gas limit,
    gasPrice: gasPrice,   // gasPrice, // gas price
  };

  // SEND Transaction
  const txSend = await walletSigner.sendTransaction(txBuild);
  console.log("gasPrice");
	console.log(gasPrice);
  console.log("");
  console.log("TX SEND");
  console.log(txSend);
};

exchangeETH();

