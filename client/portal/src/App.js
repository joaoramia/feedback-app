import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Internal imports
import { PrivateRoute } from './components/PrivateRoute';
import './App.scss';
import { WrappedLoginForm } from './pages/Login';
import { HomePage } from './pages/Home';
import { WrappedRegisterForm } from './pages/Register';

function App() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          <Router>
            <div>
              <Route path="/login" component={WrappedLoginForm} />
              <Route path="/register" component={WrappedRegisterForm} />
              <PrivateRoute exact path="/panel" component={HomePage} />
              <Route exact path="/" component={WrappedLoginForm} />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
