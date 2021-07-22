import React, { Component } from 'react'
import './pagescss.css';
import image from '../images/bgimg.jpg'
export class home extends Component {
    render() {
        return (
            <div>
                <div className="topimg" style={{backgroundImage: `url(${image})`,height: "350px", backgroundRepeat: "no-repeat",backgroundPosition : 'center'}}>
                    <div className="topimg1"></div>
                </div>
                <div className="homediv1">
                  <div className="homehead1">Trending Now</div>
                  <div className="homediv2">
                     <div className="homediv21">Covid-19</div>
                     <div className="homediv21">Featured Health Topics</div>
                     <div className="homediv21">COVID-19 Symptoms</div>
                     <div className="homediv21">FEATURED CONTENT</div>
                     <div className="homediv21">TODAY'S TOP HEALTH AND DRUG NEWS</div>
                     <div className="homediv21">COVID-19 Vaccines</div>
                  </div>
                  <div className="homediv2">  
                     <div className="homediv21">TODAY'S TOP HEALTH AND DRUG NEWS</div>
                     <div className="homediv21">FEATURED CONTENT</div>
                     <div className="homediv21">Covid-19</div>
                     <div className="homediv21">Featured Health Topics</div>
                     <div className="homediv21">COVID-19 Symptoms</div>
                  </div>
                </div>
            </div>
        )
    }
}

export default home
