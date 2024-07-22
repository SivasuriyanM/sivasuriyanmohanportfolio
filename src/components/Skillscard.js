import React from 'react'
import '../styles/Skillcard.css'
const Skillscard = ({title,iconUrl, isActive , onClick}) => {
    
  return (
    <div>
    <div className={`skills-card ${isActive ? 'active' : ''}`} onClick={()=> onClick()}>
      <div className='skill-icon'>
        <img className='icon' src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
    </div>
  )
}

export default Skillscard