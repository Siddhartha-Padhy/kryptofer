import React from 'react'

function TransferCard() {
  return (
    <div className="bg-slate-700 p-4 my-3 flex flex-col rounded-md w-full sm:w-4/5 shadow-xl">
      <input
        type="text"
        placeholder="To Account"
        className="rounded p-2 my-2"
      />
      <input type="number" placeholder="Amount" className="rounded p-2 my-2" />
      <input type="text" placeholder="Message" className="rounded p-2 my-2" />
      <button className="rounded-full bg-blue-700 text-white p-2 m-2">
        Send
      </button>
    </div>
  )
}

export default TransferCard
