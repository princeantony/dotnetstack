import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { Router, Route, browserHistory,hashHistory, IndexRoute  } from 'react-router'
let id=null;
class App extends React.Component {
  
  invokeButton()
  {
    browserHistory.push('/about/&'+{id});
  }
    setValue()
  {
    id="555";
  }
   render() {
      return (
         <div>
         <input type="button" onClick={this.setValue} value="Set Value"/>
         <input type="button" onClick={this.invokeButton} value="navigate"/>
            <ul>
               <li><Link to="home">Home</Link></li>
               <li><Link to={'about'}>About</Link></li>
               <li><Link to="contact">Contact</Link></li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}
export default App;