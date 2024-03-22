import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { UserContext } from "../../../router/Router";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';

import { SiDiscord } from "react-icons/si";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../store/UserInfo';


export default function AddUser() {
  

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const users =useSelector((state)=> state.users);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({id :users[users.length - 1].id + 1, firstname ,lastname,  email, phone }))
    // navigate('index')
  }
  

  const dispatch = useDispatch();
  return (
    <div>
<h3
        className="p-1"
        style={{
          fontFamily: "Segoe UI",
          color: "#11354D",
          textDecoration: "underline",
        }}
      >
        Add user
      </h3>

<section style={{ backgroundColor: "#eee" }} onSubmit={handleSubmit}>
      <div class="container py-5">
          <div style={{ width: "48rem" }} class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
              <p class="text- text-center">SFECTORIAN ✌️</p>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">First Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      <Form.Control
                        type="text"
                        name='firstname'
                        placeholder=" first name"
                        onChange={(e) => setFirstName (e.target.value)}
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Last Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      <Form.Control
                        type="text"
                        name='lastname'
                        placeholder="last name"
                        onChange={(e) => setLastName (e.target.value)}
                        
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      <Form.Control
                        type="email"
                        name='email'
                        placeholder="email"
                        onChange={(e) => setEmail (e.target.value)}
                        
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      <Form.Control
                        type="tel"
                        name='phone'
                        placeholder="phone"
                        onChange={(e) => setPhone (e.target.value)}
                        
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                     
                      <Form.Control
                        type="text"
                        name='address'
                        placeholder="adress"
                        onChange={(e) => setAddress (e.target.value)}
                        
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Occupation</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <select
                          id=""
                          name="occupation"
                          type="text"
                          onChange={(e) => setOccupation (e.target.value)}
                         
                          
                        >
                          <option value="volvo">student</option>
                          <option value="saab">worker</option>
                          <option value="fiat">other</option>
                        </select>
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                  <Button
                    style={{ width: "7rem" }}
                    variant="warning"
                    onClick={(e) => {
                      // onSubmit={()=> handleSubmit()}
                      // navigate(-1);
                    }}
                    >
                    Save
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      
    </section>

      
    </div>
  )
}
