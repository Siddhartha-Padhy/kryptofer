import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Transfer from './components/Transfer'

function App() {
  return (
    <div className="App bg-blue-800 pb-3">
      <Navbar />
      <Header />
      <Transfer />
    </div>
  )
}

export default App
