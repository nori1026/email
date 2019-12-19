import React, { useState } from "react";
import Nav from "./components/Options/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import FormItem from "./components/Options/FormItem";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import More from "./components/pages/More";

import "./App.css";

function App() {
  const [temp, useTemp] = useState("hi");

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/info" component={Info}></Route>
          <Route path="/more" component={More}></Route>
          <Route path="/Contact" component={FormItem}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
