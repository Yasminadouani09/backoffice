import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { UserContext } from "../../../router/Router";
import { useNavigate, useParams } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { useDispatch } from "react-redux";
import { updateCourse } from "../../../store/courses";

export default function UpdateCourse() {
    const [updatedcourse, setUpdatedcourse] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let { id } = useParams();
    console.log(id, "Update Course");

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedcourse({ ...updatedcourse, [name]: name === "price" ? +value : value });
    };
  console.log(updatedcourse)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCourse({ body: updatedcourse, id: +id })).then((res) => {
      if (!res.error) navigate("/courses");
      else alert("you should fill the form");
    });
  };
 useEffect(() => {
   window.scrollTo(0, 0);
 }, []);
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center" style={{ height: "34rem" }}>
                  <img
                    src=""
                    alt="avatar"
                    class="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 class="my-3"></h5>
                  <p class="text-muted mb-1">
                    <Form.Control
                      type="text"
                      name="imageURL"
                      placeholder="Course photo"
                      onChange={handleChange}
                    />
                  </p>
                  <p class="text-muted mb-4">SFECTORIAN ✌️</p>
                  <div class="d-flex justify-content-center">
                    <Button
                      style={{ width: "7rem" }}
                      variant="warning"
                      onClick={handleSubmit}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "48rem", height: "70rem" }} class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Course Title</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          type="text"
                          name="title"
                          placeholder="name"
                          onChange={handleChange}
                          //   onChange={(e) => setUpdatedUser(e.target.value)}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Course description</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          onChange={handleChange}
                          name="description"
                          as="textarea"
                          rows={3}
                          placeholder="please enter the course description"
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">price</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <input
                          className="w-75 form-control"
                          type="number"
                          min={0}
                          name="price"
                          placeholder="please enter the course price"
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <h3
                      className="text-center py-3"
                      style={{ color: "#ffca2c" }}
                    >
                      Add gallery
                    </h3>
                    <div class="col-sm-3">
                      <p class="mb-0">photo 1</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          type="tel"
                          name="src"
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Photo 2</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          type="tel"
                          name="src1"
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Photo 3</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        {" "}
                        <Form.Control
                          type="text"
                          name="src2"
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
