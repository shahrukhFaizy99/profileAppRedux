import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Profile from "./Pages/Profiles/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Profiles" component={Profile} exact />
          <Route path="/Profiles/profileId" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
