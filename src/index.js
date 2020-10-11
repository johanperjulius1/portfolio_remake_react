import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
