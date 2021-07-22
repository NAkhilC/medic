import React, { Component } from 'react'    
import  'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import './cssfile.css';
import logo from '../component/images/logo.jpg'
import { BrowserRouter, Route, Router, Switch,Link } from 'react-router-dom';
export class nav extends Component {

    constructor(){
        super();
        this.state={
            show:false
        }
    }
    

    render() {
        return (
            <div>
                <div className="nav1">
                    <div className="nav11">
                        <li> <img src={logo} width="50" height="30" /></li>
                        <li><Link to="/" className="home">Home</Link></li>
                        <li><Link to="/about" className="home">About Us</Link></li>
                        <li><Link to="/contact" className="home">Contact Us</Link></li>
                        <li><Link to="/careers" className="home">Careers</Link></li>
                        <li><Link to="/help" className="home">Help</Link></li>
                        <li><Link to="/faq" className="home">FAQ's</Link></li>
                    </div>
                    <div className="per"> <span className="bsf"><BsFillPersonFill /> </span></div>
                    <div className="menui"> <li onClick={()=>{this.setState({show:!this.state.show})}}><BsList /></li> </div>
                </div>
                {this.state.show ? 
                <div className="nav1mb">
                    <div className="nav111">
                        <li>LOGO</li>
                        <li><Link to="/" className="home">Home</Link></li>
                        <li><Link to="/about" className="home">About Us</Link></li>
                        <li><Link to="/contact" className="home">Contact Us</Link></li>
                        <li><Link to="/careers" className="home">Careers</Link></li>
                        <li><Link to="/help" className="home">Help</Link></li>
                        <li><Link to="/faq" className="home">FAQ's</Link></li>
                        <li><Link to="/faq" className="home">Profile</Link></li>
                    </div>
                </div> 
                : null }
                <div className="nav2">
                    <div >
                        <li ><Link to="/meds" className="liit">A-Z Meds</Link></li>
                        <li ><Link to="/diseases" className="liit">Diseases</Link></li>
                        <li ><Link to="/patients" className="liit">Patients</Link></li>
                        <li>Supplements & Vitamins</li>
                        <li>MedTerms</li>
                        <li>News & Events</li>
                    </div>
                </div>
                <div className="nav21">
                    <div className="nav211">
                        <li ><Link to="/meds" className="liit">A-Z Meds</Link></li>
                        <li ><Link to="/diseases" className="liit">Diseases</Link></li>
                        <li ><Link to="/patients" className="liit">Patients</Link></li>
                        <li>News update</li>
                        <li>FAQ’s </li>
                        <li>Covid updates</li>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default nav
