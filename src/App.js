import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Link, Redirect } from "react-router-dom";
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Link path="/home" component={Home}></Link>
        <Link path="/service" component={Service}></Link>
        <Link path="/contact" component={Contact}></Link>
        <Link path="/about" component={About}></Link>
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
