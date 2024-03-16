import React from 'react'

import team from "../../assets/team.jpg";
import Form from "react-bootstrap/Form";
import logo from "../../assets/logo (1).png";
import login from '../../assets/4794658.jpg'


import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "../../css/auth.css";

export default function Login() {
  return (
    <div>
      <Header />

      <div className="d-flex justify-content-center gap-4 py-5 ">
        <div className="px-5 py-4">
          <div
            className="card py-5 px-4 form"
            style={{ width: "30rem", height: "30rem" }}
          >
            <Form>
              <div>
                <div className="d-flex justify-content-center py-2 align-items-center flex-wrap">
                  <h1
                    style={{
                      fontFamily: "Brittany Signature",
                    }}
                  >
                    Welcome to
                  </h1>
                  <h1
                    style={{
                      fontFamily: "Brittany Signature",
                      color: "rgb(66, 177, 188)",
                    }}
                  >
                    Sfectoria
                  </h1>
                  <div
                    style={{
                      height: "5px",
                      width: "80px",
                      backgroundColor: "rgb(66, 177, 188)",
                      marginRight: "42px",
                    }}
                  ></div>
                </div>
              </div>
              <Form.Group className="mb-3 py-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div
                className="d-flex justify-content-center flex-wrap"
                style={{}}
              >
                <button
                  className="btn btn-warning py-2"
                  style={{ borderRadius: "40px", width: "17rem" }}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div className="px-5">
          <img src={login} alt="" style={{ width: "35rem" }} id="imglogin" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
