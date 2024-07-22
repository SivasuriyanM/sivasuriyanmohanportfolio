import React from 'react'
import '../styles/Projectscard.css'
import { Link } from 'react-router-dom'

function Projectscard({project}) {
  const highlights = project.highlights
  return (
    <div>
     
      <section className="pro-container">
      <div>
        <div className="pro-content">
          <h2>{project.name}</h2>
          <h4>{project.duration}</h4>
          <h4>Description : </h4>
          <p>{project.description}</p>
        </div>
        <div className="pro-info">
         <h4>Features :</h4>
          {highlights.map((highlight, index) => (
            <ul key={index}>
              <li>{highlight} </li>
            </ul>
          ))}
        </div>
        <div className='btn'>
        <Link to={project.link}  >View Demo</Link>
        </div>
        
      </div>
    </section>
    </div>
  )
}

export default Projectscard