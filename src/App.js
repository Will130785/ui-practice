import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import contact from "./pages/contact";
import index from "./pages/index";
import services from "./pages/services";
import Navigation from "./components/Navbar";


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <main>
            <Route path="/" exact={true} component={index} />
            <Route path="/contact" component={contact} />
            <Route path="/services" component={services} />
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
