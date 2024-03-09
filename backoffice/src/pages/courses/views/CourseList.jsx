import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../../store/courses";
import Card from "react-bootstrap/Card";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function CourseList() {
  const courses = useSelector((state) => state.coursesSlice.courses.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-5">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add course
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-between px-5 py-5 gap-5 ">
        {courses.map((card) => (
          <Card style={{ width: "20rem", height: "30rem" }}>
            <Card.Img
              variant="top"
              src={card.imageURL}
              style={{ height: "12rem" }}
              className="thumb-img"
            />
            <Card.Body>
              <Card.Title style={{ width: "18rem" }}>{card.title}</Card.Title>
              <Card.Text style={{ width: "18rem" }}>
                {card.description}
              </Card.Text>
              <Link to={`${card.id}`}>
                <button className="btn btn-primary">See more</button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
