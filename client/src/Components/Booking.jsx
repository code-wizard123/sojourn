import React from 'react'
import BookingStyles from '../css/Booking.module.css'
const Booking = () => {
  return (
    <div className={BookingStyles.darkdiv}>
      <div className={BookingStyles.search}>
        <input type="text" placeholder="Search.." className={BookingStyles.bar}></input>
      </div>

      <div className={BookingStyles.book}>
        <div className={BookingStyles.left}>

          <form >

            <select name="cars" id="cars" className={BookingStyles.select}>
              <option value="volvo" className={BookingStyles.option}>Stay At ?</option>
              <option value="saab" className={BookingStyles.red}>ITC Maratha</option>
              <option value="opel" className={BookingStyles.blue}>Trident</option>
              <option value="audi"  className={BookingStyles.green}>Utsav</option>
            </select>
            <br/>
            <br/>
            <br/>
            <select name="cars" id="cars" className={BookingStyles.select}>
              <option value="volvo" className={BookingStyles.option}>Rooms? </option>
              <option value="saab" className={BookingStyles.red}>1</option>
              <option value="opel" className={BookingStyles.blue}>2</option>
              <option value="audi"  className={BookingStyles.green}>3</option>
            </select>
            <br/>
            <br/>
            <br/>
      
          

            <input type="date" id="birthday"  className={BookingStyles.checkin}></input>
            
            <input type="date" id="birthday"  className={BookingStyles.checkout}></input>
     
            <br/>
            <br/>
            <br/>
            <select name="cars" id="cars" className={BookingStyles.select}>
              <option value="volvo" className={BookingStyles.option}>Traveller </option>
              <option value="saab" className={BookingStyles.red}>Yss</option>
              <option value="opel" className={BookingStyles.blue}>No</option>
            </select>
            <br/>
            <br/>
            <br/>
            <button className={BookingStyles.button57} role="button">BOOK NOW<span class="text"></span><span>AGREE</span></button>
          </form>

        </div>
      </div>



      <div className={BookingStyles.right}>


      </div>
      <div className={BookingStyles.info}>
        <h1 className={BookingStyles.top}>Listed Hotels</h1>

        <div className={BookingStyles.hotel}>
          <div className={BookingStyles.hotelcards}>
            <div className={BookingStyles.left}>

              <div className={BookingStyles.nameposition}>
                <p className={BookingStyles.name}>ITC MARATHA</p>
                <div>
                  <p className={BookingStyles.address}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
              </div>

            </div>
            <div className={BookingStyles.rightc}>
              {/* for image */}
            </div>
          </div>
          <div className={BookingStyles.hotelcards}>

            <div className={BookingStyles.left}>

              <div className={BookingStyles.nameposition}>
                <p className={BookingStyles.name}>ITC MARATHA</p>
                <div>
                  <p className={BookingStyles.address}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
              </div>

            </div>
            <div className={BookingStyles.righta}>
              {/* for image */}
            </div>
          </div>
          <div className={BookingStyles.hotelcards}>
            <div className={BookingStyles.left}>

              <div className={BookingStyles.nameposition}>
                <p className={BookingStyles.name}>ITC MARATHA</p>
                <div>
                  <p className={BookingStyles.address}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
              </div>

            </div>
            <div className={BookingStyles.rightb}>
              {/* for image */}
            </div>
          </div>

        </div>
    


      
        
    
        </div>

        <div className={BookingStyles.footer}>
<div className={BookingStyles.social}>
<div className={BookingStyles.socialcontent}>
<div className={BookingStyles.socialwidth}>
 <div> <img src='./Images/insta.png' className={BookingStyles.socialimg}></img> </div>

 <div>   <img src='./Images/twitter.png' className={BookingStyles.socialimg}></img></div>
 

 <div>  <img src='./Images/facebook.png' className={BookingStyles.socialimg}></img></div>
 
</div>
</div>
</div>
<div className={BookingStyles.issue}>
  <div className={BookingStyles.issuetext}>
<div className={BookingStyles.padding}>
  <p>About</p>
</div>
<div  className={BookingStyles.padding}>
  <p>Contact</p>
</div>
<div  className={BookingStyles.padding}>
  <p>help</p>
</div>
</div>
</div>
</div>
      </div>
    
  )
}

export default Booking


{/* <form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <br><br>
  <input type="submit" value="Submit"></input>
</form> 

  <input type="submit" value="Submit"></input>*/}