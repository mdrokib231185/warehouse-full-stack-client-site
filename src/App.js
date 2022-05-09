
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Headers from './Pages/Shared/Headers';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';

import Register from './Pages/Login/Register/Register';
import About from './Pages/About/About';
import Notfound from './Pages/NotFound/Notfound';
import MyItems from './Pages/MyItems/MyItems';

import AddItems from './Pages/AddItems/AddItems';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ManageItemss from './Pages/ManageItmess/ManageItemss';
import ProductDetails from './Pages/ProductDetails/ProductDetails';


function App() {
  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manageItemss"
          element={
            <RequireAuth>
              <ManageItemss></ManageItemss>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/addItems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
