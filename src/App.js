import './App.css';
import Card from './components/Balance';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title="Our Pricing" />
      <Card title="Basic" />
      <Card title="Professional" />
      <Card title="Master" />
    </div>
  );
}

export default App;
