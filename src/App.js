import React, { Component } from "react";
import { Provider } from "./context";
import "./App.css";

import Header from "./components/Header/Header";
import Scroll from "./components/Scroll/Scroll";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

class App extends Component {
  letsSee = () => {
    console.log("whatever");
  };
  render() {
    return (
      <Provider>
        <div className="App">
          <Scroll>
            <Header />
          </Scroll>

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
