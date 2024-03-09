import React from "react";
import team from "../assets/team.jpg";
import Form from "react-bootstrap/Form";
import logo from "../assets/logo (1).png";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
export default function auth() {
  return (
    <div py-5>
      <div className="d-flex justify-content-center py-5 align-items-center flex-wrap">
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

      <div className="d-flex justify-content-center gap-4 ">
        <div className="px-5 py-4">
          <div
            className="card py-5 px-4"
            style={{ width: "30rem", height: "30rem" }}
          >
            <Form>
              <div>
                <h3 style={{ color: "rgb(66, 177, 188)" }}>login</h3>
                <img src={logo} alt="" style={{ width: "12rem" }} />
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
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
                  className="btn btn-primary"
                  style={{ borderRadius: "40px", width: "17rem" }}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div className="px-5">
          <img
            src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-free-vector-login-concept-illustration-png-image_9140539.png"
            alt=""
            style={{ width: "35rem" }}
          />
        </div>
      </div>
    </div>
  );
}
