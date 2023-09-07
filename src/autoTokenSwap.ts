import { ethers } from 'ethers'
import {contractInfo} from '../contractInfo'
import { JsonRpcProvider } from '@ethersproject/providers'

// Connect to baobab network
const provider = new ethers.providers.JsonRpcProvider('https://api.baobab.klaytn.net:8651')

// Contract Abi
const abi = contractInfo.routerAbi

// Create wallet to private key
const wallet = new ethers.Wallet(contractInfo.walletAddress, provider as JsonRpcProvider)

// Create smart contract instance
const contract = new ethers.Contract(contractInfo.contractAddress, abi, wallet)
// Run swap token every 5 sec
async function swapTokens() {
    //"n a 50% chance, SWAP from A to B or from B to A
    while (true) {
        const tokenA = contractInfo.token0Address
        const tokenB = contractInfo.token1Address
        const token0AmountIn = contractInfo.token0AmountIn	
        const token1AmountIn = contractInfo.token1AmountIn  
        const to = contractInfo.toAddress

        const isSwapAToB = Math.random() < 0.5
        const path = isSwapAToB ? [tokenA, tokenB] : [tokenB, tokenA]
        const amountIn = isSwapAToB ? [token0AmountIn, token1AmountIn] : [token1AmountIn, token0AmountIn]

        // set deadline (currentTIme + 1 hour)
        const deadline = Math.floor(Date.now() / 1000) + 3600
        // Transaction smart contract method
        const tx = await contract.swapExactTokensForTokens(
            amountIn[0],
            0,
            path,
            to,
            deadline
        )

        // Check transaction result
        await tx.wait()
        console.log('Transaction hash:', tx.hash)

        // wait 5 sec
        await sleep(2000)
    }
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

swapTokens().catch((error) => {
    console.error('Error executing token swap:', error)
})