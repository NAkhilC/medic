import React, { Component } from 'react'
import AZMED from './azmeds';
import axios from 'axios';
import './module.css';
import aimg from '../images/Advilf.png'
import { BrowserRouter, Route, Router, Switch,Link, Redirect } from 'react-router-dom';
import { waitForDomChange } from '@testing-library/react';
export default class med extends Component {
    constructor(props) {
        super(props);
        this.state = {mode: [], name: "",
        used: "",
        side_effects: "",
        data: [],used:[{}],warnings:[{}], inte:[{}], storage:[{}]};
      }
      componentDidMount()
      {
        const a="akhil";
        axios.post(`http://localhost:8080/meds/${this.props.match.params.id}`,a)
        .then(res => {
          if(res.data){
            this.setState({data:res.data, used:res.data.used, warnings:res.data.warnings,storage:res.data.storage, inte:res.data.interactions});  
          }
          else
          {
            this.setState({data:res.data});
          }       
        }) 
     
       
      }
    render() { 
      const a=[];
      const warn=[];
      const inter=[];
      const stor=[];
      if( this.state.used && this.state.data && this.state.warnings)
       {
         
          for(var i=1;i<Object.values(this.state.used).length+1;i++)
         {
          a.push( <li>{this.state.used[i]}</li>);
         } 
         for(var i=1;i<Object.values(this.state.warnings).length+1;i++)
         {
          warn.push( <li>{this.state.warnings[i]}</li>);
         }
         for(var i=1;i<Object.values(this.state.storage).length+1;i++)
         {
          stor.push( <li>{this.state.storage[i]}</li>);
         }
         for(var i=1;i<Object.values(this.state.inte).length+1;i++)
         {
          console.log(this.state.inte[i]);
          inter.push( <li>{this.state.inte[i]}</li>);
         }
         
      }
      else{
        a[0]=["No data"]
        warn[0]=["no"]
      }
      if(this.state.data.formula)
      {
        
      }
      const images = require.context('../images', true);

// adding dynamic paths
let dynamicImage = images(`./Advilf.png`);


        return (
            <div className="mainmeddiv">
               <div>
                <h1 className="medname">{this.props.match.params.id}</h1> 
                <h6 >Brand: {this.state.data.Brand}</h6> 
                <div> <h4 className="meddesc">Description</h4> {this.state.data.desc}</div>
                  <div  className="flexdis">
                    <div className="medde"><h4 >Used for</h4> {a.map(a=>a)} </div>
                    <div className="marl"><h4 className="meddesc">Warnings</h4> {warn.map(war=>war)} </div>
                    <div className="meddesc1"><h4 >Storage Conditions</h4> {stor.map(a=>a)} </div>
                  </div>
               </div>
              <div>
                 <h4 className="meddesc12">Interactions With other drugs </h4>
                 {inter.map(war=>war)}
              </div>
              <div>
                 <h4 className="meddesc">Formula </h4>
                 <img alt="image" src={require('../images/'+this.props.match.params.id+'f.png').default} />
              </div>
            </div>
            
            
        )
    } 
}
