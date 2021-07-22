import React, { Component } from 'react'
import './pagescss.css'
export default class footer extends Component {
    render() {
        return (
                <div className="footer"> 
                <p className="copyright">&copy;Medic place 2021</p> 
                <p className="tandc">Terms and Conditions</p> 
                </div>
        )
    }
}
