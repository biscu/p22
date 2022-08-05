import "./index.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Moneyfarm from "./Pages/Moneyfarm";
import Hm from "./Pages/Hm";
import Handy from "./Pages/Handy";
import ErrorPage from "./Pages/ErrorPage";
import Nav from "./components/Nav/Nav";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import StyleGuide from "./Pages/StyleGuide";

function App() {
  return (
    <Router>
        <Nav />
        <ScrollToTop>
              <Routes>
                <Route exact path="/" element={ <Home/> }> </Route>
                <Route path="/about" element={ <About/> }> </Route>
                <Route path="/hm" element={ <Hm/> }> </Route>
                <Route path="/moneyfarm" element={ <Moneyfarm/> }> </Route>
                <Route path="/handy" element={ <Handy/> }> </Route>
                <Route path="/styleguide" element={ <StyleGuide/> }> </Route>
                <Route path="*" element={ <ErrorPage/> }> </Route>
              </Routes>
        </ScrollToTop>
    </Router>
  );
}

export default App;
