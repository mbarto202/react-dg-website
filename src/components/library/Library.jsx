import React from 'react'
import './library.css'

const Library = () => {
  return (
    <section id='library'>
      <h1 className='section_title'>Resources</h1>
      
      <div className='container scen_container'>
        <article className='scen_item'>
          <h3> Scenario 1</h3>
        </article>

        <article className='scen_item'>
          <h3> Scenario 2</h3>
        </article>

        <article className='scen_item'>
          <h3> Scenario 3</h3>
        </article>
      </div>
    </section>
  )
}

export default Library