import React, { Component } from "react";
import { Provider } from "./context";

import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Navigation />
          <Home />
          <About />
          <Projects />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
