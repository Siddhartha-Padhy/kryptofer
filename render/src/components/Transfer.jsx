import React from 'react'
import TransferCard from './TransferCard'

function Transfer() {
  return (
    <div className="flex flex-col w-full sm:flex-row justify-between">
      <div className="p-3 text-white">
        Enjoy the ease of ethereum transactions through smart contracts right at
        your finger tips with the faciltity of adding a message.
        <div className="grid grid-rows-2 gap-1 grid-flow-col m-2">
          <div className="rounded-tl-lg border-black border-2 text-center bg-slate-700">
            Reliable
          </div>
          <div className="rounded-tl-lg border-black border-2 text-center bg-slate-700">
            Quick
          </div>
          <div className="rounded-tl-lg border-black border-2 text-center bg-slate-700">
            Secure
          </div>
          <div className="rounded-tl-lg border-black border-2 text-center bg-slate-700">
            Low Fees
          </div>
          <div className="rounded-tl-lg border-black border-2 text-center bg-slate-700">
            Blockchain
          </div>
          <div className="rounded-tl-lg border-black border-2 text-center bg-slate-700">
            Ethereum
          </div>
        </div>
      </div>
      <TransferCard />
    </div>
  )
}

export default Transfer
