import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {useRoutes} from './routes'
import 'materialize-css'


function App() {
  const routes = useRoutes()
  return (
    <div className="App">
      <Router>
          <Navbar />
        <div className="container">
          {routes}
        </div>
      </Router>
    </div>
  );
}

export default App;
