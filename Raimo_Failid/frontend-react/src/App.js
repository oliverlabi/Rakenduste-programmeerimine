import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./pages/Posts";
import Header from "./components/Header";
import Account from "./pages/Account";
import Registration from "./components/Registration";
import Main from "./pages/Main";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/edit/:id" component={Edit} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/account/registration" component={Registration} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
