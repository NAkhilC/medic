import React, { Component } from 'react'
import './module.css'
import axios from 'axios';
import { BrowserRouter, Route, Router, Switch,Link, Redirect } from 'react-router-dom';
import Med from './med';
import Select from 'react-select';

export class diseases extends Component {
    constructor(props) {
        super(props);
        this.state = {mode: [],persons:[],meds:[],letter:"",filter:"", mode:[],selectedOption:null,sta:[]};
      }

      componentDidMount() {
        axios.get(`http://localhost:8080/meds`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons ,meds:res.data});
            console.log(this.state.meds);
          })  
      }
      
    handleId = (e) => {
      console.log(e.target.id);
        this.setState({ persons:[],drug:[],letter:e.target.id});
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption ,sta:[{"num":1,"name":selectedOption.name}]});
        console.log(`Option selected:`, selectedOption.name);
        
      };
    render() {
      const alldata=[];
      const Co=[];
      const da=[];
      const { selectedOption } = this.state;
      if(this.state.sta.map(a=>a.num)==1)
      {

        return <Redirect to={"meds/"+this.state.sta.map(a=>a.name)}></Redirect>
      }
      for(var i=0;i<Object.values(this.state.meds).length;i++)
      {
         for(var j=0;j<Object.values(this.state.meds[i].used).length+1;j++)
         {
             if(this.state.meds[i].used[j])
             {
            alldata.push(this.state.meds[i].used[j]);
            Co.push({"label":this.state.meds[i].used[j],"name":this.state.meds[i].used[j]});
             }
         }
      }

     for(var i=0;i<da.length;i++)
     { 
       console.log(da[i].name);
     }



        return (
            <div>
                <div className="azdiv1">
                    <div className="azdiv11">
                        <div className="azdiv111" onClick={this.handleId} value="a" id="A">A</div>
                        <div className="azdiv111" onClick={this.handleId} value="b" id="B">B</div>
                        <div className="azdiv111" onClick={this.handleId} value="c" id="C">C</div>
                        <div className="azdiv111" onClick={this.handleId} value="d" id="D">D</div>
                        <div className="azdiv111" onClick={this.handleId} value="e" id="E">E</div>
                        <div className="azdiv111" onClick={this.handleId} value="f" id="F">F</div>
                        <div className="azdiv111" onClick={this.handleId} value="g" id="G">G</div>
                        <div className="azdiv111" onClick={this.handleId} value="h" id="H">H</div>
                        <div className="azdiv111" onClick={this.handleId} value="i" id="I">I</div>
                        <div className="azdiv111" onClick={this.handleId} value="j" id="J">J</div>
                        <div className="azdiv111" onClick={this.handleId} value="k" id="K">K</div>
                        <div className="azdiv111" onClick={this.handleId} value="l" id="L">L</div>
                        <div className="azdiv111" onClick={this.handleId} value="m" id="M">M</div>
                        <div className="azdiv111" onClick={this.handleId} value="n" id="N">N</div>
                        <div className="azdiv111" onClick={this.handleId} value="o" id="O">O</div>
                        <div className="azdiv111" onClick={this.handleId} value="p" id="P">P</div>
                        <div className="azdiv111" onClick={this.handleId} value="q" id="Q">Q</div>
                        <div className="azdiv111" onClick={this.handleId} value="r" id="R">R</div>
                        <div className="azdiv111" onClick={this.handleId} value="s" id="S">S</div>
                        <div className="azdiv111" onClick={this.handleId} value="t" id="T">T</div>
                        <div className="azdiv111" onClick={this.handleId} value="u" id="U">U</div>
                        <div className="azdiv111" onClick={this.handleId} value="v" id="V">V</div>
                        <div className="azdiv111" onClick={this.handleId} value="w" id="W">W</div>
                        <div className="azdiv111" onClick={this.handleId} value="x" id="X">X</div>
                        <div className="azdiv111" onClick={this.handleId} value="y" id="Y">Y</div>
                        <div className="azdiv111" onClick={this.handleId} value="z" id="Z">Z</div>
                    </div>
                </div>
                  <div>
                   <br></br><Select id="form11" options={Co} onChange={this.handleChange} />
                  </div> 
                  <div className="disdiv">
                      <div ><div><h5 style={{ marginLeft:"31%",marginTop:"10px"}}>List of Diseases with letter : {this.state.letter}</h5></div> {Co.filter(med=> med.name[0].includes(this.state.letter)).map(person => <Link className="medsletter" to={"/meds/"+person.name}><li id={person.name}>{person.name}</li></Link> )}</div>
                  </div>
                 </div>
        )
    }
}

export default diseases
