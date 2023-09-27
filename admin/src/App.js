import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import Add_category from "./Pages/Add_category";
import Mange_category from "./Pages/Mange_category";
import Add_product from "./Pages/Add_product";
import Mange_product from "./Pages/Mange_product";
import Dashbord from "./Pages/Dashbord";import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Mange_user from "./Pages/Mange_user";
import Edit_user from "./Pages/Edit_user";
 

 

 

function App() {
  return (
     <>
     <BrowserRouter>
     <ToastContainer/>
     <Routes>
      <Route path="/" element={<><Login/><Footer/></>}></Route>
      <Route path="/dashbord" element={<><Header/><Dashbord/><Footer/></>}></Route>
      <Route path="/add category" element={<><Header/><Add_category/><Footer/></>}></Route>
      <Route path="/manage category" element={<><Header/><Mange_category/><Footer/></>}></Route>
      <Route path="/add product" element={<><Header/><Add_product/><Footer/></>}></Route>
      <Route path="/mange_product" element={<><Header/><Mange_product/><Footer/></>}></Route>
      <Route path="/mange user" element={<><Header/><Mange_user/><Footer/></>}></Route>
      <Route path="/edit_user/:id" element={<><Header/><Edit_user/><Footer/></>}></Route>
       
      </Routes>
     </BrowserRouter>

      
      
     </>
  ); 
}

export default App;
