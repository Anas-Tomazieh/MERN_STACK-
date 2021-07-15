import './App.css';
import PersonCard from './components/PersonCard ';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PersonCard lastName="Doe" firstName="John" age={15} hairColor="Black"/>
      <PersonCard lastName="Smith" firstName="John" age={20} hairColor="Brown"/>
      <PersonCard lastName="Fill" firstName="Millore" age={30} hairColor="Black"/>
      <PersonCard lastName="Tomazieh" firstName="Anas" age={24} hairColor="Brwon"/>
      </header>
    </div>
  );
}

export default App;
