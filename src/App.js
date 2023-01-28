import { useState } from 'react'
import './App.css'
import Card from './components/Balance'
import Header from './components/Header'

function App() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className="App">
      <Header title="Our Pricing" onToggle={setIsToggled} isToggled={isToggled} />
      <main className="cards">
        <Card
          title="Basic"
          price={19.99}
          storage={'500 GB'}
          users={2}
          limit={3}
          isLeft={true}
          isToggled={isToggled}
        />
        <Card
          title="Professional"
          price={24.99}
          storage={'1 TB'}
          users={5}
          limit={10}
          isPro={true}
          isToggled={isToggled}
        />
        <Card
          title="Master"
          price={39.99}
          storage={'2 TB'}
          users={10}
          limit={20}
          isRight
          isToggled={isToggled}
        />
      </main>
    </div>
  )
}

export default App
