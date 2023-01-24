import './App.css'
import Card from './components/Balance'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header title="Our Pricing" />
      <main className="cards">
        <Card title="Basic" price={19.99} storage={'500 GB'} users={2} limit={3} />
        <Card title="Professional" price={24.99} storage={'1 TB'} users={5} limit={10} />
        <Card title="Master" price={39.99} storage={'2 TB'} users={10} limit={20} />
      </main>
    </div>
  )
}

export default App
