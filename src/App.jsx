import React from 'react'
import Header from './components/header/Header'
import Title from './components/title/Title'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Library from './components/library/Library'
import Games from './components/games/Games'
import Footer from './components/footer/Footer'

/**
 *  @author Michael Barto
 *  @date 2/13/2023
 *  Mission Statement: The goal of child therapy is to help the child understand and manage their thoughts, feelings, and behaviors in a healthy way.
 *  The therapist may use games, videos, or other creative activities to help the child express themselves.
 *  My mission is to create a tool that helps guide therapists in reaching their goal.
 */


const App = () => {
    return (
        <>
            <Header />
            <Title />
            <About />
            <Library />
            <Games />
            <Footer />
            <Nav />
        </>
    )
}

export default App