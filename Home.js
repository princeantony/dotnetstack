
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {browserHistory} from 'react-router'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            age: 10
            
        };
    }

setValue()
{
	var text = ReactDom.findDOMNode(this.refs.username).value;
	this.setState({age: text});
}
navigate()
{
	 browserHistory.push('/about/'+this.state.age);
}
   render() {
      return (
         <div className="redDiv">
            <h1>Home...</h1>
            <input type="text" ref="username" />
            <input type="button" value="set button"  onClick={this.setValue.bind(this)} />
            <input type="button" value="navigate button"  onClick={this.navigate.bind(this)} />
         {this.state.age}
         </div>
      )
   }
}
export default Home;
