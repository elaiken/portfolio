import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter >
      <Home />
    </BrowserRouter>
  );
}
export default App;