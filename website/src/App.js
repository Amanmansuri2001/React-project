import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kid from "./Pages/Kid";
import Sign_up from "./Pages/Sign_up";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Edit_user from "./Pages/Edit_user";
 
 
 
 
 

 



function App() {
  return (
    
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/login" element={<><Login/></>}></Route>
          <Route path="/" element={<><Header/><Home/><Footer/></>}></Route>
          <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
          <Route path="/men" element={<><Header/><Men/><Footer/></>}></Route>
          <Route path="/women" element={<><Header/><Women/><Footer/></>}></Route>
          <Route path="/kid" element={<><Header/><Kid/><Footer/></>}></Route>
          <Route path="/signup" element={<><Sign_up/></>}></Route>
          <Route path="/user" element={<><Header/><Edit_user/><Footer/> </>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
