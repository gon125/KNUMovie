import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Index from "./screens/Index"

function App() {  

    const [loggedIn, setLoggedIn] = useState(false);
    const [Id, setId] = useState("Email");
    const [Password, setPassword] = useState("Password");
    
    function logoutButtonClicked() {
        logout();
        setLoggedIn(false);
    }

    function logout() {

    }

  return (
    <div>
      {
      loggedIn && (
      <Router>
        <div>
          <button type="button" onClick={logoutButtonClicked}>
            로그아웃
          </button>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/signup">
              <About />
            </Route>
            <Route path="users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      )
      } 
      {
      !loggedIn && (  
        <Index 
        setLoggedin={setLoggedIn}
        setId={setId}
        setPassword={setPassword}/>
      )
      }
    </div>
  );
}

function Home() {
  return (
    <div>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
    </div>
  );
}

function About() {
  let history = useHistory();
  function backButtonClicked() {
    history.goBack();
  }
  return (
    <button type="button" onClick={backButtonClicked}>
      뒤로
    </button>
  );
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
