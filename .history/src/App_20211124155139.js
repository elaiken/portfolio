import { BrowserRouter, Route, Switch, Routes } from "react-router-dom"
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter >
      <Routes>



        <Route path='/' element={<Home />}>


        </Route>
        <Route path="/projects" element={<Projects />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;