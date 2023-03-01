import React from 'react'
import './games.css'
import IMG1 from '../../assets/demo-pic.png'
import IMG3 from '../../assets/demo-pic3.PNG'

const Games = () => {
  return (
    <section id='games'>
      <h1 className='section_title'>Games</h1>
      <div className='container games_container'>
        <article className='games_item'>
          <div className='games_img'>
            <img src= {IMG1} alt=''/>
          </div>
          <h3>Far Out Fairway</h3>
          <div className='games_item-cta'>
            <a href="https://play.unity.com/mg/other/team-project-2-build-1"  className='btn btn-primary' target='_blank'>Play</a>
          </div>
        </article>

        <article className='games_item'>
          <div className='games_img'>
            <img src={IMG3} alt=''/>
          </div>
          <h3>Labyrinth</h3>
          <div className='games_item-cta'>
            <a href="https://play.unity.com/mg/other/crazy-labyrinth-team-t"  className='btn btn-primary' target='_blank'>Play</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Games