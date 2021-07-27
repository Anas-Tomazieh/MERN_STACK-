import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path ="hzkel"/>
        <Number path = ":asds"/>
        <Color path= ":anas/:color/:back" />
        
      </Router>
    </div>
  );
}

export default App;
