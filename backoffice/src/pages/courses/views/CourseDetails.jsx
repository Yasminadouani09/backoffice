import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcourse } from "../../../store/courses";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export default function CourseDetails() {
  const { id } = useParams();
  const course = useSelector((state) => state.coursesSlice.course);
  console.log(course,"this is course");
  // console.log(course?.Lesson, "those are lessons");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcourse(id));
  }, [dispatch]);

  return (
    <div>
      <h1>{course?.tile}</h1>
      <div className="d-flex justify-content-center py-4">
        <img src={course?.imageURL} alt="" style={{ width: "40rem" }} />
      </div>
<h1></h1>
      <Accordion className="w-75 d-flex justify-content-center">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {course?.Lesson.map((lesson) => (
        <div style={{ width: "20rem" }}>
          <p className="text-center">{lesson.title}</p>
        </div>
      ))}
    </div>
  );
}
