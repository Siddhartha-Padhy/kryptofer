import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Transfer from './components/Transfer'
import Transactions from './components/Transactions'

function App() {
  return (
    <div className="App bg-indigo-800 ">
      <Navbar />
      <Header />
      <Transfer />
      <Transactions />
      <div className="bg-slate-700 text-white text-center mt-2 p-2">
        Created with 💓 by &nbsp;
        <a
          href="https://github.com/Siddhartha-Padhy"
          className="hover:text-rose-800 font-semibold"
        >
          Siddhartha Padhy
        </a>
      </div>
    </div>
  )
}

export default App
