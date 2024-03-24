import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcourse } from "../../../store/courses";
import { useNavigate, useParams } from "react-router-dom";

export default function CourseDetails() {
  const course = useSelector((state) => state.coursesSlice.course);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcourse(id));
  }, [dispatch]);

  return (
    <div>
      <h1>{course?.title}</h1>
      <div className="d-flex justify-content-center py-4">
        <img src={course?.imageURL} alt="" style={{ width: "40rem" }} />
      </div>
      {/* {course?.Lesson.map((lesson) => (
        <div style={{ width: "20rem" }}>
          <p className="text-center"></p>
        </div>
      ))} */}
    </div>
  );
}
