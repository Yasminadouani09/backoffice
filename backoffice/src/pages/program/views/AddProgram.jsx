import React, { useState } from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from 'react-redux';
import { addProgram } from '../../../store/Program';


const  AddProgramForm = () => {
  const navigate = useNavigate(); 
   const dispatch = useDispatch();
   const [formData, setFormData] = useState({

    title:'',     
    description:'' ,
    duration:'',
    imageURL:'',    
    price:'',
   });
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProgram(formData));
  };
  return (
    <div>
      <div className="px-5 py-3">
        <ProgressBar now={0} />
        <div className="py-5">
          <Card className="py-3">
            <Form className="py-3 px-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h3 className="text-warning">Add a new program</h3>
                <Form.Label className="py-3 ">program cover</Form.Label>
                {/* <div className="d-flex justify-content-center"> */}
                {/* <Card style={{ width: "50rem", height: "20rem" }}>
                    <div className="d-flex justify-content-center">
                      <Form.Control
                        className="w-25 "
                        type="image"
                        style={{ top: "50%" }}
                        src="https://auphonic.com/media/blog/resumable_upload.png"
                        placeholder="please enter the program name"
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
                      placeholder="please enter the program name"
                    />
                  </Card> */}
                {/* </div>
                <div className="py-3">
                  <button className="btn btn-outline-primary"> Upload</button>
                </div> */}

                <Form.Control onSubmit={handleSubmit}
                  className="w-75"
                  type="text"
                  name="title"
                  value={formData.title}
                  placeholder="please enter the program image"
                  onChange={handleChange}
                />
                <Form.Label className="py-1 ">program name</Form.Label>
                <Form.Control
                  className="w-75"
                  type="text"
                  placeholder="please enter the program name"
                  onChange={handleChange}
                />
                <Form.Label className="py-3 ">program description</Form.Label>
                <Form.Control
                  className="w-75"
                  style={{ height: "5rem" }}
                  type="text"
                  placeholder="please enter the program description"
                  onChange={handleChange}
                />
                <Form.Label className="py-1 ">Price</Form.Label>
                <Form.Control
                  className="w-75"
                  type="number"
                  min={0}
                  pl
                  onChange={handleChange}
                />
                <Form.Label className="py-3 ">program duration</Form.Label>
                <Form.Control
                  className="w-75"
                  type="text"
                  placeholder="please enter the program duration"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-center gap-4">
              <button
                style={{ width: "9rem" }}
                className="btn btn-outline-primary"
                onClick={() => {
                  dispatch(sendprogram(program)).then((res) => {
                    if (!res.error) navigate(-1);
                  });
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
