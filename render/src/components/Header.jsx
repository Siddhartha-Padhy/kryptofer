import React, { useContext } from 'react'
import { TransactionContext } from '../Context'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'

function Header() {
  const { connectWallet, connectedAccount } = useContext(TransactionContext)

  return (
    <div className="w-full p-5 text-center bg-indigo-800 min-h-[60vh]">
      <h1 className="text-white text-4xl">Welcome to Kryptofer!</h1>
      <p className="text-white mt-3">
        Most secure and instant transactions right on a click at the most
        trusted website.
      </p>
      {connectedAccount[0] !== '' ? (
        <button className="rounded-full bg-green-700 text-white px-3 py-2 m-2 hover:bg-green-800 ease-in duration-200">
          <span className="flex">
            Connected &nbsp;
            <IoCheckmarkDoneCircle fontSize={26} className="mt-0.5" />
          </span>
        </button>
      ) : (
        <button
          className="rounded-full bg-blue-700 text-white px-3 py-2 m-2 hover:bg-violet-600 ease-in duration-200"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}

export default Header
