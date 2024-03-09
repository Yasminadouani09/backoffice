import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function AddCourse() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-5 py-3">
        <ProgressBar now={0} />
        <div className="py-5">
          <Card className="py-3">
            <Form className="py-3 px-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h3 className="text-warning">Add a new course</h3>
                <Form.Label className="py-3 ">Course cover</Form.Label>
                <div className="d-flex justify-content-center">
                  <Card style={{ width: "50rem", height: "20rem" }}>
                    <div className="d-flex justify-content-center">
                      <Form.Control
                        className="w-25 "
                        type="image"
                        style={{ top: "50%" }}
                        src="https://auphonic.com/media/blog/resumable_upload.png"
                        placeholder="please enter the course name"
                        onClick={() => {
                          document.getElementById("myfile").click();
                        }}
                      />
                    </div>
                    <Form.Control
                      className="w-75"
                      type="file"
                      id="myfile"
                      style={{ display: "none" }}
                      placeholder="please enter the course name"
                    />
                  </Card>
                </div>
                <div className="py-3">
                  <button className="btn btn-outline-primary"> Upload</button>
                </div>
                <Form.Label className="py-1 ">Course name</Form.Label>
                <Form.Control
                  className="w-75"
                  type="text"
                  placeholder="please enter the course name"
                />
                <Form.Label className="py-3 ">Course description</Form.Label>
                <Form.Control
                  className="w-75"
                  style={{ height: "5rem" }}
                  type="text"
                  placeholder="please enter the Course description"
                />
                <Form.Label className="py-1 ">Price</Form.Label>
                <Form.Control
                  className="w-75"
                  type="number"
                  min={0}
                  placeholder="please enter the course name"
                />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-center gap-4">
              <button
                style={{ width: "9rem" }}
                className="btn btn-outline-primary"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Back
              </button>
              <button
                style={{ width: "9rem" }}
                className="btn btn-outline-primary"
              >
                Next
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
