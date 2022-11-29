import React from 'react';
import resume from '../../../src/assets/resumeold.pdf'


const skills = [
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'Node'},
  {id: 3, name: 'SQL'},
  {id: 4, name: 'MongoDB'},
  {id: 5, name: 'React'},
  {id: 6, name: 'MERN'}
];


export default function Resume() {
  return (
    <div className="container mt-5 ">
      <h1>Resume</h1>
      <p>
      <a className= "buttonBody" href={resume} download="Kristina's Resume" target='_blank'>
<button type="button" class="btn btn-success btn-lg btn-block">Download Resume</button>
</a>




      <h2 className= "buttonBody">Proficiencies</h2>

      <div className= "buttonBody">
      <ul>
        {skills.map((item) => 
        (
        
        <li key ={item.id}>{item.name}</li>
        
        )
        
        )}
  </ul>
    
  </div>

      
      </p>
    </div>
  );
}
