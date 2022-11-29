import React from 'react';
import Card from 'react-bootstrap/Card';
import myImage from '../../../src/assets/phototermppng.png';

export default function About() {
  return (
    <div className="container mt-5">
      <h1>About</h1>
      <p className='aboutBody mt-5'>
      <img src={myImage} alt="Kristina" height="200" />

      <Card.Body className="container mt-5">

      <Card.Text >
      Kristina lives in the Bay Area, CA where she earned a Bachelors in Illustration.  
         <br />
         Recently she graduated UC Berkley Extension's Full Stack Coding Bootcamp and 
         <br />
         is looking to expand her knowledge and career with a dive into Coding.
</Card.Text>
  
      </Card.Body>
         </p>
      
    </div>
  );
}
