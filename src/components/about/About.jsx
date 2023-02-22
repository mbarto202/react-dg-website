import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h1 className='section_title'>About</h1>
      <div className='about_content'>
        <h1>Our Mission</h1>  
        <p className='statement'>
          The goal of child therapy is to help the child understand and manage their thoughts, feelings, and behaviors in a healthy way.
          The therapist may use games, videos, or other creative activities to help the child express themselves.
          Our mission is to provide services to help guide therapists in reaching their goal.
        </p>
      </div>
      <div className='about_content'>
        <h1>Why Us</h1>  
        <p className='statement'>
          We not only provide service for kids but also for certified therapists. 
          There is a need for new therapist to be exposed to certain scenarios. 
          Our collection of scenarios solve that need and allow for a better understanding of what to do a specific situation.
        </p>
      </div>
    </section>
  )
}

export default About