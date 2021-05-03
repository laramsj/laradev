import '../css/App.css';
import Navbar  from './navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Flowers from './pages/Flowers'
import SignUp from './pages/SignUp';
import Footer from './footer/Footer';
import Hero from './hero/Hero';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Hero />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/flowers' exact component={Flowers} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
