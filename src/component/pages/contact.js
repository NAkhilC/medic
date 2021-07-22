import React, { Component } from 'react'
import cus from '../images/cuscare.jpg';
import './pagescss.css';
import { BsPhone } from "react-icons/bs";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export class about extends Component {
    render() {
        return (
            <div  className="conback"  style={{ backgroundImage: 'url('+cus+')',backgroundSize: "cover",height: "300px", opacity:0.9}}>
              <div className="condiv1">
                  <div className="grid-item" >
                      <div className="circle"><BsPhone className="bsp" /></div>
                      <div className="infocus">Contact us and we'll get back to you within 24 hours.
                        <div>+1 8073581946</div>
                      </div>
                  </div>
                  <div className="grid-item"> 
                  <div className="circle"> <MdEmail className="bsp" /></div>
                      <div className="infocus">Contact us and we'll get back to you within 24 hours.
                        <div>medicsupport@medic.inc</div>
                      </div></div>
                  <div className="grid-item">
                  <div className="circle"><BsFillChatDotsFill className="bsp" /></div>
                      <div className="infocus">
                            <div className="conform">
                              <input type="text" placeholder="Name"></input>
                              <input type="email" placeholder="Email"></input>
                              <textarea placeholder="Mesaage" />
                              <input type="submit" className="btn btn-info" ></input>
                            </div>
                      </div>
                  </div> 
              </div>
            </div>
        )
    }
}

export default about
