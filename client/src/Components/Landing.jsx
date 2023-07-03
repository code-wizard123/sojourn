import React from 'react'
import LandingStyles from '../css/Landing.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Landing = () => {
  return (

    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.4}>
          <img src='./Images/3d-render-mountains-against-space-sky.jpg' className={LandingStyles.imga}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          {/* <img src='./Images/2.png' className={LandingStyles.imgb} id='imgb'></img>
          <img src='./Images/4.png' className={LandingStyles.imgc}></img> */}
          {/* <img src='./Images/3.png' className={LandingStyles.imgd}></img> */}
          {/* <img src='./Images/5.png' className={LandingStyles.imge}></img>
          <img src='./Images/1.png' className={LandingStyles.imgf}></img> */}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
     <h1 className={LandingStyles.h1}>SOJOURN</h1>
     <h2 className={LandingStyles.h2}>Book Travell Enjoy</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>

        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>

        </ParallaxLayer>


      </Parallax>
    </div>

  )
}

export default Landing
