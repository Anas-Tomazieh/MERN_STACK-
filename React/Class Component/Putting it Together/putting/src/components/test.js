import React, { Component } from 'react';
    
    
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
    const { firstname, lastname, age, color }=this.props

        return(
    <div>
        <h1>{ firstname }, {lastname} </h1>
        <p>age: { this.state.age }</p>
        <p>color: { color }</p>
        <fieldset>
        <button onClick={ this.riseage }>BirthDay Button for {firstname}, {lastname}</button>
        </fieldset>

    </div>
    
    ); 
    }
riseage = () => {
  
        this.setState({ age:this.state.age+1 });
    
    }
}
export default Test;