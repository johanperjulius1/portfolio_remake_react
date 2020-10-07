import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
     <Hello />
     <Header />
     <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));