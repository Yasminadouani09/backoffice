import React, { Component, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import '../css/CourseDetails.css'


export default function CourseDetails() {
  const [state, setState] = useState({});
  const [form, setForm] = useState({});
  const { id } = useParams();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name] : value });
  };
  console.log(form);
  
   const handleSubmit = async (e) => {
     e.preventDefault()
     try {
       const response = await axios.post(
         "http://localhost:3100/api/v1",
         form
       );
       console.log(response);
     } catch (error) {
       console.log(error);
     }
   };


  const getData = async () => {
    try {
      let response = await axios.get("http://localhost:5000/courses/" + id);
      setState({ data: response.data });
      console.log("this is data from backend", response.data);
      // console.log("this is data"+ response.data); manajmch najma3 chaine m3a array
    } catch (err) {
      console.log("Error getting cards");
    }
  };
   useEffect(() => {
     getData();
   }, []);
  return (
    <div>
      <div>
        <div className="backg">
          <img
            src="https://images.inc.com/uploaded_files/image/1920x1080/software-computer-code-1940x900_35196.jpg"
            alt=""
            style={{
              height: "50rem",
              width: "100%",
            }}
          />
          <h1 style={{ position: "absolute" }}>
            {" "}
            Welcome to {state.data?.title}{" "}
          </h1>
        </div>
        <div></div>
      </div>

      <div>
        <div className="d-flex justify-content-center py-5 align-items-center flex-wrap">
          <h1 style={{ fontFamily: "Brittany Signature" }}>
            {state.data?.title}
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
      <div className="d-flex justify-content-center">
        <img
          src={state.data?.imageURL}
          alt=""
          style={{ borderRadius: "20%" }}
        />
      </div>

      <Form className="py-5 px-3 " onSubmit={handleSubmit}>
        <p class="lead">
          Notre service des admissions prendra contact avec vous dans un délais
          de 48 heures ouvrées suivant votre demande d’inscription issue du
          formulaire de contact en ligne. Pour un traitement plus rapide, vous
          pouvez nous contacter par téléphone (+216 55 180 992) .
        </p>
        <p class="lead">
          Si vous souhaitez bien rejoindre notre école, remplissez le formulaire
          ci-dessous et vous serez convié à un entretien d’admission afin
          d’évaluer la qualité de votre candidature.{" "}
        </p>
        <p className="fs-1  ">Formulaire d'inscription</p>
        <button class="btn btn-light" onClick={() => this.props.showHome()}>
          Accueil
        </button>
        <Form.Group
          className="mb-3 d-flex p-2 gap-5"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            className="px-3 border border-info"
            name="LastName"
            placeholder="Prénom"
            onChange={handleChange}
          />
          <Form.Control
            name="name"
            className="border border-info"
            placeholder="FirstName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex p-2 gap-5 "
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            name="email"
            className="px-3 border border-info"
            placeholder="Email"
            onChange={handleChange}
          />
          <Form.Control
            name="phone"
            className="border border-info"
            placeholder="Phone"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex p-2 gap-5"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            name="adress"
            className="border border-info"
            placeholder="Adresse"
            onChange={handleChange}
          />
          <Form.Control
            name="occupation"
            className="border border-info"
            placeholder="occupation"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex p-2 gap-5"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            name="date"
            type="dateOfBirth"
            className="border border-info"
            placeholder="Date of birth"
            onChange={handleChange}
          />
          <Form.Control
            name="studies"
            className="border border-info"
            placeholder="studies"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex p-2 gap-5"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            name="college"
            className="border border-info"
            placeholder="college"
            onChange={handleChange}
          />
          <Form.Control
            name="degree"
            className="border border-info"
            placeholder="Degree"
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Form.Label className="py-2 px-2">
          Formation que je souhaite intégrer au sein de l'école SFECTORIA
        </Form.Label> */}
        {/* <Form.Select
          aria-label="Default select example"
          className="border border-info"
        >
          <option>Veuillez choisir une option</option>
          <option value="1">Formation Développement Web</option>
          <option value="2">Formation Développement Mobile</option>
          <option value="3">Formation Data Science</option>
        </Form.Select> */}

        {/* <Form.Label className="py-2 px-2">
          Session d'entretien souhaitée
        </Form.Label>
        <Form.Select
          aria-label="Default select example"
          className="border border-info "
        >
          <option>Veuillez choisir une option</option>
          <option value="1">Lundis à 14:30</option>
          <option value="2">Mercredis à 15:30</option>
          <option value="3">Vendredis à 11</option>
        </Form.Select> */}

        <div className="  py-4 px-2 d-flex">
          <button
            type="submit"
            name="button"
            class="btn btn-info"
            onSubmit={() => handleSubmit()}
          >
            Valider ma demande d'inscription
          </button>
          <button type="button" class="btn btn-light">Accueil</button>
        </div>
      </Form>
    </div>
  );
}
