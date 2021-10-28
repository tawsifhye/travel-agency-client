import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthProvider from "./Context/AuthProvider";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound"

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
