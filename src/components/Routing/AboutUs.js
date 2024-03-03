import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AboutUs() {

  const navigate = useNavigate();

  const goToHomePage = () => {
    console.log("do something..")
    navigate("/home")
  }

  return <>
    <h2> About Us Page</h2>
    <Link to="/home">Go to Home Page</Link> <br/>
    <button onClick={goToHomePage}>Do something & Go Home</button>
  </>
}
