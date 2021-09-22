import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* <Wrapper> */}
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
        {/* </Wrapper> */}
      </div>
    </Router>
  );
}

export default App;
