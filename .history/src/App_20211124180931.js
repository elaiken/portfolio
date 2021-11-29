import { BrowserRouter, Route, Switch, Routes } from "react-router-dom"
import Error from "./components/Error";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Projects from "./components/Projects";


const App = () => {
  return (
    <BrowserRouter >
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>



        <Route path="/projects" element={<Projects />}>

        </Route>
        <Route path="/*" element={<Error />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;


