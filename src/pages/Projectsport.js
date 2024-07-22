import data from '../data/mydata.json'
import React from 'react'
import Projectscard from '../components/Projectscard'
import "../styles/Project.css"

function Projectsport() {
  const projects = data.projects
  return (
    <div className='proj-container'>
      {projects.map((project,index)=>(
        <Projectscard key={index} project={project} />
      ))}
    </div>
  )
}

export default Projectsport