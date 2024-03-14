import React from "react";
import App from "../Pages/App";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Programs from "../Components/Programs";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CourseDetails from "../Pages/CourseDetails";
import ProgramDetails from "../Pages/ProgramDetails";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<App />}>
              <Route index element={<Home />}/>
              <Route path=":id" element={<CourseDetails/>} />
              <Route path=":id" element={<ProgramDetails/>} />
              
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
