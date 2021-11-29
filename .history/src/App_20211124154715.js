import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter >
      <Route path='/page 2'>
        <Home />

      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </BrowserRouter>
  );
}
export default App;