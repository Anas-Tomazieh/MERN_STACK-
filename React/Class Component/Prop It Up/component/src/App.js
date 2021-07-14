import logo from './logo.svg';
import './App.css';
import Personcard from './components/personcard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Personcard firstName = "Jane" lastName = "Doe" age = {15} hairColor = "black" />
        <Personcard firstName = "Smith" lastName = "John" age = {12} hairColor = "black" />
        <Personcard firstName = "FillMore" lastName = "Millard" age = {25} hairColor = "berown" />
        <Personcard firstName = "Smith" lastName = "Maria" age = {62} hairColor = "berown" />
      </header>
    </div>
  );
}

export default App;
