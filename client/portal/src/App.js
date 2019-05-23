import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Internal imports
import { PrivateRoute } from './components/PrivateRoute';
import './App.scss';
import {WrappedNormalLoginForm} from './pages/Login';

function App() {
  return (
    <div className="jumbotron">
        <div className="container">
            <div className="col-sm-8 col-sm-offset-2">
                <Router>
                    <div>
                        {/* <PrivateRoute exact path="/panel" component={HomePage} /> */}
                        <Route path="/login" component={WrappedNormalLoginForm} />
                        {/* <Route path="/" component={LandingPage} /> */}
                    </div>
                </Router>
            </div>
        </div>
    </div>
  );
}

export default App;
