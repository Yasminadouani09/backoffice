import React from 'react'
import AboutUs from "../Components/AboutUs";
import Carrousel from "../Components/Carrousel";
import Courses from "../Components/Courses";
import Programs from "../Components/Programs";
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
          <Carrousel />
          <AboutUs />
          <Programs />
          <Courses />
          <Outlet/>
    </div>
  )
}
