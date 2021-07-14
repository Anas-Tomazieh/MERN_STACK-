import './App.css';
import React, { Component } from 'react';
<h1 class="my-class">This is HTML</h1>
class App extends Component {    
  render() {        
      return (  
        <>          
          <h1 class="my-class">Hello Dojo!</h1>   
          <h2 class="my-class">This is some thing to do</h2>   
          <ul>
            <li><b>Learn React</b></li>
            <li><b>Climp Mt.Everest.</b></li>
            <li><b>Run a Marathone</b></li>
            <li><b>Feed a dogs</b></li>

          </ul> 
        </>   
      );    
  }
}

export default App;
