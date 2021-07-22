import React, { Component } from 'react'
import Select from 'react-select';
import './module.css';
import axios from 'axios';
import { BrowserRouter, Route, Router, Switch,Link, Redirect } from 'react-router-dom';

class patients extends Component {
    constructor(props) {
        super(props);
        this.state = {pats:[]};
      }

      componentDidMount() {
        axios.get(`http://localhost:8080/patients`)
          .then(res => {
            const persons = res.data;
            this.setState({ pats:res.data});
            console.log(this.state.pats);
          })  
      }
    render() {
        const unit=[];
        const time=[];
        unit.push({"label":"Birch"},{"label":"Spruce"},{"label":"Lilac"},{"label":"Tulip"},{"label":"Rose"},{"label":"Orchid"});
        time.push({"label":"7 AM"},{"label":"11 AM"},{"label":"3 PM"},{"label":"5 PM"},{"label":"7 PM"},{"label":"11 PM"});
        return (
            <div>
                <div className="patdiv1">
                    <Select id="form111" placeholder={"Select Unit"} options={unit} onChange={this.handleChange} />
                    <Select id="form111" placeholder={"Select Time"}  options={time} onChange={this.handleChange} />
                    <button id="form111" class="btn btn-primary">Search</button>
                </div>
                <div className="patdiv2">
                    <div>{this.state.pats.map(a=>
                    <div className="patdiv21">
                        <Link  to={"/patient/"+a.Id}><div style={{float:"left"}}><img src={require('../images/patients/'+a.Id+'.jpg').default} className="patimg" /></div>
                        <div className="patover"> <div>Name:  {a.name}</div><div>Age: {a.Age}{a.Gender}</div><div>Unit: {a.Floor}</div><div>Med Id: {a.Id}</div><div>Room: {a.Room}</div></div>
                    </Link></div>
                    )}</div>
                </div>
            </div>
        )
    }
}

export default patients
