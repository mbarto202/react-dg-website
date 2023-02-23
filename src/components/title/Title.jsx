import React from 'react'
import './title.css'

const Title = () => {
  return (
    <section className='title'>
      <h1 className='options'> <a href='#about'>About</a></h1>
      <h1 className='options'> <a href='#library'>Resources</a></h1>
      <h1 className='options'> <a href='#games'>Games</a></h1>
      <h1 className='options'> <a href='#foot'>Contact</a></h1>
    </section>
  )
}

export default Title