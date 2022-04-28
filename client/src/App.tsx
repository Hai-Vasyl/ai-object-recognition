import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Administration from "./pages/administration/Administration";
import Canvas from "./pages/canvas/Canvas";
import Categories from "./pages/categories/Categories";
import Gallery from "./pages/gallery/Gallery";

import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import User from "./pages/user/User";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Popup from "./components/popup/Popup";
import FormAuth from "./components/form-auth/FormAuth";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Popup>
        <FormAuth />
      </Popup>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="canvas" element={<Canvas />} />
        <Route path="administration" element={<Administration />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":id" element={<Gallery />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
