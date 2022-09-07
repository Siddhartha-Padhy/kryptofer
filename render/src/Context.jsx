import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from './utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer,
  )

  console.log({
    provider,
    signer,
    transactionContract,
  })
}

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState('')

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      setConnectedAccount(accounts[0])
      window.location.reload()
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const checkWalletConnected = async () => {
    if (!ethereum) return alert('Please Install Metamask')
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    console.log(accounts)
    try {
      if (accounts.length) {
        setConnectedAccount(accounts[0])

        //   getAllTransactions()
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkWalletConnected()
  }, [])

  return (
    <TransactionContext.Provider value={{ connectWallet, connectedAccount }}>
      {children}
    </TransactionContext.Provider>
  )
}
