import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchprograms } from "../../../store/Program";
import Card from "react-bootstrap/Card";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProgramsList() {
  const programs = useSelector((state) => state.ProgramSlice.programs.items);

  console.log(programs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchprograms());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <div>
      <div className="px-5">
        <button className="btn btn-primary" onClick={() => navigate("add")}>
          Add program
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-between px-5 py-5 gap-5 ">
        {programs.map((card) => (
          <Card style={{ width: "20rem", height: "35rem" }}>
            <Card.Img
              variant="top"
              src={card.imageURL}
              style={{ height: "12rem" }}
              className="thumb-img"
            />
            <Card.Body>
              <Card.Title style={{ width: "18rem" }}>{card.title}</Card.Title>
              <Card.Text className="py-3" style={{ width: "18rem" }}>
                {card.description}
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Link to={`${card.id}`}>
                  <button className="btn btn-primary">See more</button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
