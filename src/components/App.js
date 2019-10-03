import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer  autoClose={3000} hideProgressBar/>
    </div>
  );
}

export default App;


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
 * 
 * Switch allows us to declare that only one route should match. it acts like the js switch statement
 * 
 */

//for the usual a tags use Link, 
