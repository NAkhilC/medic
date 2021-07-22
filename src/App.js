import React from 'react';
import './App.css';
import Nav from '../src/component/nav';
import { BrowserRouter as Router, Switch, Route,Routes,Link } from 'react-router-dom';
import About from "../src/component/pages/about";
import Contact from "../src/component/pages/contact";
import Footer from '../src/component/pages/footer'
import Home from '../src/component/pages/home'
import AZM from '../src/component/modules/azmeds'
import MED from '../src/component/modules/med'
import DISEASES from '../src/component/modules/diseases'
import PATIENTS from '../src/component/modules/patients'
import PATIENT from '../src/component/modules/patient'

function App() {
  return (
<div>
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/meds" component={AZM} />
      <Route exact path="/diseases" component={DISEASES} />
      <Route exact path="/patients" component={PATIENTS} />
      <Route exact path={"/meds/:id"} render={(props) => <MED {...props} />} />
      <Route exact path={"/patient/:id"} render={(props) => <PATIENT {...props} />} />
    </Switch>
    <Footer />
  </Router>
</div>
  );
}

export default App;