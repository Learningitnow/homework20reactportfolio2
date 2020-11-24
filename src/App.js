import Navbar from "./component/Navbar";
import Footer from "./component/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contactpage from "./component/htmlpages/Contactpage"
import About from "./component/htmlpages/About"
import Portfolio from "./component/htmlpages/Portfolio"

function App() {
  return ( <Router>
    <div className="body">
      <Navbar />
      <div className="container">
      
          <Route exact path="/React-Portfolio/Portfolio" component={Portfolio}/>
            
          <Route exact path="/React-Portfolio/Contact" component={Contactpage}/>
          
          <Route exact path="/React-Portfolio/About" component={About}/>

          <Route exact path="/" component={About}/>
      
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
