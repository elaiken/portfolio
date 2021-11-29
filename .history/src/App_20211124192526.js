import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "./components/Error";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";



const App = () => {
  return (
    <BrowserRouter >
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route path="/projects" element={<Projects />}>
        </Route>
        <Route path="contact-me" element={<Contacts />}>
        </Route>
        <Route path="/*" element={<Error />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;








