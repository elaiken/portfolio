import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter >
      <Home />
      <Route path='/page 2'>

      </Route>
      <Route path="/projects">
      </Route>
    </BrowserRouter>
  );
}
export default App;