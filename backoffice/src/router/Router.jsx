import React, { useState, useContext, createContext } from "react";
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
import { Provider } from "react-redux";
import Programs from "../pages/program/Programs";
import ProgramsList from "../pages/program/views/ProgramsList";
import AddProgram from "../pages/program/views/AddProgram";
import ProgramDetails from "../pages/program/views/ProgramDetails";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

export const UserContext = createContext();
let { id } = useParams
export default function Router() {
  const [user, setUser] = useState({
    id: 1,
    firstName: "Yasmine",
    lastName: "adouani",
    Email: "jassiadouani09@gmail.com",
    Phone: "99 438 675",
    dateOfBirth: "14/06/2001",
    adress: "Hammam lif",
    occupation: "student",
    studies: "informatique de gestion",
    college: "ESSECT",
    degree: "3rd year",
    src: "https://static.vecteezy.com/system/resources/previews/004/477/572/non_2x/business-woman-elegant-avatar-character-free-vector.jpg",
  });

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
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
                  <Route path="/" element={<Auth />}></Route>
                )}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
