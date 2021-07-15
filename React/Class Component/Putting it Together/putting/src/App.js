import './App.css';
import Test from './components/test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test firstname="John" lastname="Doe " age={15} color="Black"/>
        <Test firstname="Smith" lastname="john " age={30} color="Brown"/>
      </header>
    </div>
  );
}

export default App;
