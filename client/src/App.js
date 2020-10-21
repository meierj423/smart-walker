import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home/index";
import About from "./pages/About/about";
import LocationSearch from "./pages/LocationSearch/location";
import MainNav from "./components/NavBar";
import WeatherResults from "./pages/WeatherResults";

function App() {
  return (
    <Router>
      <div>
        <MainNav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/about"]}>
            <About />
          </Route>
          <Route exact path={["/location"]}>
            <LocationSearch />
          </Route>
          <Route
            path="/results"
            render={(props) => <WeatherResults {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
