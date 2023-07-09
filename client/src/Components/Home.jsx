import React from 'react'
import HomeStyles from '../css/Home.module.css'

const Home = () => {
  return (

    <div className={HomeStyles.out}>
      <link href='https://fonts.googleapis.com/css?family=Michroma' rel='stylesheet'></link>
      <div className={HomeStyles.first}>
        <div className={HomeStyles.logo}>
          <img src='./Images/Sojourn_Logo 3.png' className={HomeStyles.logosize}></img>
        </div>
        <div className={HomeStyles.text}>
          <p className={HomeStyles.logotext}>SoJourn</p>
          <p className={HomeStyles.slogantext}>Awaken To A Different World.</p>
          <button className={HomeStyles.button57} role="button">BOOK NOW<span class="text"></span><span>AGREE</span></button>
        </div>

      </div>

      <div className={HomeStyles.info}>
        <h1 className={HomeStyles.top}>Top Listed Hotels</h1>

        <div className={HomeStyles.hotel}>
          <div className={HomeStyles.hotelcards}>
            <div className={HomeStyles.left}>

              <div className={HomeStyles.nameposition}>
                <p className={HomeStyles.name}>ITC MARATHA</p>
                <div>
                  <p className={HomeStyles.address}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
              </div>

            </div>
            <div className={HomeStyles.right}>
              {/* for image */}
            </div>
          </div>
          <div className={HomeStyles.hotelcards}>

            <div className={HomeStyles.left}>

              <div className={HomeStyles.nameposition}>
                <p className={HomeStyles.name}>ITC MARATHA</p>
                <div>
                  <p className={HomeStyles.address}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
              </div>

            </div>
            <div className={HomeStyles.right}>
              {/* for image */}
            </div>
          </div>
          <div className={HomeStyles.hotelcards}>
            <div className={HomeStyles.left}>

              <div className={HomeStyles.nameposition}>
                <p className={HomeStyles.name}>ITC MARATHA</p>
                <div>
                  <p className={HomeStyles.address}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
              </div>

            </div>
            <div className={HomeStyles.right}>
              {/* for image */}
            </div>
          </div>

        </div>

        <div className={HomeStyles.state}>
          <p className={HomeStyles.statetext}>Select the State</p>

          <div className={HomeStyles.statecards}>

            <div className={HomeStyles.cover}>

              <p className={HomeStyles.covertext}>Punjab</p>


            </div>

            <div className={HomeStyles.cover}>
              <p className={HomeStyles.covertext}>Punjab</p>
            </div>
            <div className={HomeStyles.cover}>
              <p className={HomeStyles.covertext}>Punjab</p>
            </div>
            <div className={HomeStyles.cover}>
              <p className={HomeStyles.covertext}>Punjab</p>
            </div>
            <div className={HomeStyles.cover}>
              <p className={HomeStyles.covertext}>Punjab</p>
            </div>
            <div className={HomeStyles.cover}>
              <p className={HomeStyles.covertext}>Punjab</p>
            </div>
          </div>
        </div>

<div className={HomeStyles.footer}>
<div className={HomeStyles.social}>
<div className={HomeStyles.socialcontent}>
<div className={HomeStyles.socialwidth}>
 <div> <img src='./Images/insta.png' className={HomeStyles.socialimg}></img> </div>

 <div>   <img src='./Images/twitter.png' className={HomeStyles.socialimg}></img></div>
 

 <div>  <img src='./Images/facebook.png' className={HomeStyles.socialimg}></img></div>
 
</div>
</div>
</div>
<div className={HomeStyles.issue}>
  <div className={HomeStyles.issuetext}>
<div className={HomeStyles.padding}>
  <p>hello</p>
</div>
<div  className={HomeStyles.padding}>
  <p>hello</p>
</div>
<div  className={HomeStyles.padding}>
  <p>hello</p>
</div>
</div>
</div>
</div>
      </div>


    </div>
  )
}

export default Home
