import React, { useState, useContext, createContext, useEffect } from "react";
import App from "../apps/App";
import Dashboard from "../pages/Dashboard";
import Auth from "../apps/auth";
import Course from "../pages/courses/Courses";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import AddCourse from "../pages/courses/views/AddCourse";
import CourseList from "../pages/courses/views/CourseList";
import CourseDetails from "../pages/courses/views/CourseDetails";
import Profile from "../pages/profile/Profile";
import ProfileDetails from "../pages/profile/views/ProfileDetails";
import EditProfile from "../pages/profile/views/EditProfile";
import { store } from "../store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Programs from "../pages/program/Programs";
import ProgramsList from "../pages/program/views/ProgramsList";
import AddProgram from "../pages/program/views/AddProgram";
import ProgramDetails from "../pages/program/views/ProgramDetails";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Login from '../pages/auth/Login';
import Spinner from "react-bootstrap/Spinner";
import { getMe } from "../store/auth";
export const UserContext = createContext();

export default function Router() {
  // const user = useSelector((store) => store.auth.me);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
  "id": 1,
  "firstName": "yasmine",
  "lastName": "ad",
  "email": "yasmine@sfectoria.com",
  "phone": "78585",
  "address": "string",
  "occupation": "string"
}
    
  )
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token)
  //     dispatch(getMe()).then((res) => {
  //       setIsLoading(false);
  //     });
  // }, [dispatch]);

  return (
    <>
      {/* {isLoading && (
        <div
          className="position-fixed h-100 w-100 bg-white justify-content-center d-flex align-items-center"
          style={{ zIndex: 6 }}
        >
          <Spinner animation="border" />
        </div>
      )} */}
      <BrowserRouter>
        <Routes>
          <Route>
            {user ? (
              <Route path="/" element={<App />}>
                <Route index element={<Dashboard />} />
                <Route path="courses" element={<Course />}>
                  <Route index element={<CourseList />} />
                  <Route path="add" element={<AddCourse />} />
                  <Route path=":id" element={<CourseDetails />} />
                </Route>
                <Route path="profile" element={<Profile />}>
                  <Route index element={<ProfileDetails />} />
                  <Route path="edit" element={<EditProfile />} />
                </Route>
                <Route path="programs" element={<Programs />}>
                  <Route index element={<ProgramsList />} />
                  <Route path="add" element={<AddProgram />} />
                  <Route path=":id" element={<ProgramDetails />} />
                </Route>

                <Route path="all_users" element={<Users />} />
              </Route>
            ) : (
              <Route path="/" element={<Auth />}>
                <Route index element={<Login />} />
              </Route>
            )}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
