import React, { Component, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function CourseDetails() {
  const [state, setState] = useState({});
  const { id } = useParams();
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
  return <div>datials</div>;
}
