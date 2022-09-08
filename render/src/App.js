import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Transfer from './components/Transfer'
import Transactions from './components/Transactions'

function App() {
  return (
    <div className="App bg-indigo-800 pb-3">
      <Navbar />
      <Header />
      <Transfer />
      <Transactions />
    </div>
  )
}

export default App
