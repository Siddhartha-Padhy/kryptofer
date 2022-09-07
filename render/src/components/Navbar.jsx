import React, { useContext } from 'react'
import { TransactionContext } from '../Context'
import { MdAccountBalanceWallet } from 'react-icons/md'

function Navbar() {
  const { connectedAccount } = useContext(TransactionContext)
  return (
    <div className="w-full bg-blue-600 p-2 flex flex-row justify-between">
      <h3 className="text-white text-lg">Kryptofer</h3>
      {connectedAccount !== '' ? (
        <h3 className="text-white text-lg flex flex-row">
          <MdAccountBalanceWallet fontSize={28} className="mt-0.5" />
          &nbsp;
          {connectedAccount.slice(0, 2) +
            '***' +
            connectedAccount.slice(38, 42)}
        </h3>
      ) : (
        <MdAccountBalanceWallet fontSize={28} className="mt-0.5" />
      )}
    </div>
  )
}

export default Navbar
