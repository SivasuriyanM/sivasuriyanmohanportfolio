import React from 'react'
import data from '../data/mydata.json'
import Experiencecard from '../components/Experiencecard'
import Leardership from '../components/Leardership'

import "../styles/Experience.css"

function Experince() {
  const experiences = data.experience
  const learderships = data.leadership_experience
 
  return (
    <>
    <div className='exp-container'>
      <h2>Work Experience</h2>
      {experiences.map((experience,title)=>(
        <Experiencecard key={title} experience = {experience}/>
      ))}
    </div>
    <div className='exp-container'>
      <h2>Leardership Experince</h2>
      {learderships.map((leardership,title)=>(
        <Leardership key={title} leardership = {leardership}/>
      ))}
    </div>
    </>
  )
}

export default Experince