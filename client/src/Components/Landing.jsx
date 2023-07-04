import React from 'react'
import LandingStyles from '../css/Landing.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Landing = () => {
  return (
    <div className={LandingStyles.App}>
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.1}>
          <img src='./Parallax-images/cloud-back.jpg' className={`${LandingStyles.imga} ${LandingStyles.landimg}`}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.5}>
          <img src='./Parallax-images/moon.png' className={`${LandingStyles.imgb} ${LandingStyles.landimg}`}></img>
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
      </Parallax>
    </div>
  )
}

export default Landing
