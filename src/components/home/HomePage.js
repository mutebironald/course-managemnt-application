import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;

/**
 * React router dom / routing explained
 * 
 * At the top level we use the BrowserRouter to allow browser routing
 * then we use the Route to navigate between different components
 * 
 * We use the Link  or NavLink as anchor tags
 * 
 * Link has a history prop that stores the history of navigation, clicking on a link triggers history.push()
 * 
 * We use links to symbolise anchor tags
 * 
 */

//for the usual a tags use Link, 
