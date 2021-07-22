import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter, Route, Router, Switch,Link } from 'react-router-dom';
export class about extends Component {

        state = {
            persons: []
          }

        
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    render() {
        return (
            <div>

                <ul>
                { this.state.persons.map(person => <li ><Link >{person.id}</Link></li>)}
             </ul>
            </div>
        )
    }
}

export default about
