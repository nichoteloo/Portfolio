import React from 'react';
import './components/Global/FontAwesome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/Global/NavMenu';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import Projects from './page/Projects';
import Footer from './components/Global/Footer';
import SmoothScrollBar from './components/Global/SmoothScrollBar';

export default function App() {
  return (
    <Router>
      <NavMenu />
      <SmoothScrollBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </SmoothScrollBar>
    </Router>
  );
}
