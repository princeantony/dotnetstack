
import React, { Component } from 'react'
import axios from 'axios'
class About extends React.Component {
	    constructor(props){
        super(props);
        this.state = {
            isShow: 10,
            svcData:null
            
        };
    }

 componentWillMount() {
 	if(this.props.params.id !== undefined)
 	{
      this.setState({isShow:this.props.params.id});
      this.callSvc('https://api.github.com/users/codeheaven-io');
  }
  else
  	console.log("not param");
   }
   callSvc(url)
   {

   	axios.get(url)
      .then(function (response) {
        //apiResult = response;
        console.log(response);
        this.setState({svcData:response.data});
      })
      .catch(function (error) {
        //apiResult = error;
        console.log(error);
      });
   }
   render() {
           
      return (
         <div className="blueDiv">
            <h1>About...{this.state.isShow}</h1>
            <div>{this.state.svcData}</div>
            <input type='button' value="About button" />
         </div>
      )
   }
}

export default About;
