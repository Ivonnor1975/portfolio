import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
         <Route exact path="/" component={About} />
         <Route exact path="/About" component={About} />
         <Route exact path="/ContactForm" component={ContactForm} />
         <Route exact path="/projects" component={Projects} />
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;