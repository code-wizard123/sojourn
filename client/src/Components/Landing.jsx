import React from 'react'
import LandingStyles from '../css/Landing.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Landing = () => {
  return (
    <div className={LandingStyles.App}>
      <Parallax pages={1.6} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.1}>
          <img src='./Parallax-images/cloud-back.jpg' className={`${LandingStyles.imga} ${LandingStyles.landimg}`}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.5}>
          <img src='./Parallax-images/sun.png' className={`${LandingStyles.imgb} ${LandingStyles.landimg}`}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <img src='./Parallax-images/3.png' className={`${LandingStyles.imgc} ${LandingStyles.landimg}`}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <img src='./Parallax-images/2.png' className={`${LandingStyles.imgc} ${LandingStyles.landimg}`}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.9}>
          <h1 className={LandingStyles.h1}>SOJOURN</h1>
          <h2 className={LandingStyles.h2}>Book Travel Enjoy</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
        <div className={LandingStyles.infoa}>
        <h1 className={LandingStyles.informationa}>
        The Sojourn tourism website should provide a warm welcome  for all visitors. The website represents the city and its people. The primary goal is to make visitors’ stays as enjoyable and memorable as possible.
The Landing page  features beautiful images showcasing the website. Major upcoming events and festivals helps visitors plan their trip. Useful links for things like transportation, accommodations and dining options are prominently displayed.
<br/><br/>The website reflects the city’s spirit through visual style and written voice. Its clear navigation and helpful information empower visitors to explore and enjoy this unique destination. Ultimately, the goal is to create a positive  impression that leads visitors to become promoters and return guests for years to come. A welcoming website sets the stage for truly memorable tourism experiences
<br/><br/>Rahul Babar - <a href="https://github.com/rahulbabar1212">GitHub</a><br/>Ranauk Singh Kalsi - <a href="https://github.com/code-wizard123">GitHub</a></h1>
        </div>

        </ParallaxLayer>
      
      </Parallax>

    </div>
  )
}

export default Landing
