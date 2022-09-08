import React from 'react'
import TransferCard from './TransferCard'

function Transfer() {
  return (
    <div className="flex flex-col w-full sm:flex-row justify-between">
      <div className="py-3 text-white">
        <div className="bg-slate-900 rounded-r-2xl mr-4 p-4 h-full">
          Enjoy the ease of ethereum transactions through smart contracts right
          at your finger tips with the faciltity of adding a message. Goerli
          testnet with solidity blockchain.
          <div className="grid grid-rows-2 gap-1 grid-flow-col my-4 mx-2">
            <div className="rounded-tl-lg rounded-br-lg border-black border-2 text-center bg-blue-800 py-2">
              Reliable
            </div>
            <div className="rounded-tl-lg rounded-br-lg border-black border-2 text-center bg-blue-800 py-2">
              Quick
            </div>
            <div className="rounded-tl-lg rounded-br-lg border-black border-2 text-center bg-blue-800 py-2">
              Secure
            </div>
            <div className="rounded-tl-lg rounded-br-lg border-black border-2 text-center bg-blue-800 py-2">
              Low Fees
            </div>
            <div className="rounded-tl-lg rounded-br-lg border-black border-2 text-center bg-blue-800 py-2">
              Blockchain
            </div>
            <div className="rounded-tl-lg rounded-br-lg border-black border-2 text-center bg-blue-800 py-2">
              Ethereum
            </div>
          </div>
        </div>
      </div>
      <div className="ml-4">
        <TransferCard />
      </div>
    </div>
  )
}

export default Transfer
