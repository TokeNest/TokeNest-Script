 import { ethers } from "ethers"
 
 const routerAbi = [""] // Input your contract abi

const contractAddress = "" // Input your contract address
const walletAddress = "" // Input your private address of wallet

const token0Address = "" // Input your token0 Address
const token1Address = "" // INput your token1 Address

const token0AmountIn = 0 // Input you want swap amount for token0
const token1AmountIn = 0 // Input you want swap amount for token1
// ex) ethers.utils.parseUnits('1000', 18)

const toAddress = "" // Input to wallet Address

export const contractInfo = {
	routerAbi,
	contractAddress,
	walletAddress,
	token0Address,
	token1Address,
	token0AmountIn,
	token1AmountIn,
	toAddress,
}