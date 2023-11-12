import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Pages/NoPage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Layout from "./Pages/Layout";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseContext from "./Hooks/UseContext";
import Users from "./Pages/Users";
import Userinsert from "./Pages/Userinsert";


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="usestate" element={<UseState />} />
          <Route path="useeffect" element={<UseEffect/> } />
          <Route path="usecontext" element={<UseContext/> } />
          <Route path="users" element={<Users/> } />
          <Route path="userinsert" element={<Userinsert/> } />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
