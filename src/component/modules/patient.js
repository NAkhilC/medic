import React, { Component } from 'react'
import axios from 'axios';

class patient extends Component {
    constructor(props) {
        super(props);
        this.state = {patientinfo:[], dis:[]};
      }
      componentDidMount()
      {
        const a="akhil";
        axios.get(`http://localhost:8080/patient/${this.props.match.params.id}`)
        .then(res => {
          if(res.data){
            this.setState({patientinfo:res.data, dis:res.data.Diseases});  
          }
          else
          {
            this.setState({patientinfo:res.data});
          }       
        }) 
      }
    render() {
        var disc=[];
        if( this.state.dis)
        {
          
           for(var i=1;i<Object.values(this.state.dis).length+1;i++)
          {
           disc.push( <li>{this.state.dis[i]}</li>);
          } 
        }
        return (
            <div>
                <div style={{display:'flex'}}>
                    <div className="pa1div1"><img src={require('../images/patients/'+this.props.match.params.id+'.jpg').default} className="patimg1" /></div>
                    <div className="pa1div2">  
                       <h6>Name: {this.state.patientinfo.name}</h6>
                       <h6>MED Id: {this.state.patientinfo.Id}</h6>
                       <h6>Age: {this.state.patientinfo.Age}</h6>
                       <h6>Gender: {this.state.patientinfo.Gender}</h6>
                       <h6>Room: {this.state.patientinfo.Room}</h6>
                       <h6>Unit: {this.state.patientinfo.Floor}</h6>
                    </div>
                </div>
                <h1 className="medname">{this.props.match.params.id}</h1> 
                {disc.map(a=>a)}
            </div>
        )
    }
}

export default patient
