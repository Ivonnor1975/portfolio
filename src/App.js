import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <HashRouter>
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <Switch>
          <div className="container">
            <Route exact path="/" component={About} />
            <Route exact path="/About" component={About} />
            <Route exact path="/ContactForm" component={ContactForm} />
            <Route exact path="/projects" component={Projects} />
          </div>
      </Switch>
      <Footer />
    </div>
  </HashRouter>
  );
}

export default App;