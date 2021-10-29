import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthProvider from "./Context/AuthProvider";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound"
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyBooking from "./components/MyBooking/MyBooking";

function App() {

  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/mybooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path='/booking/:_id'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
