import React from 'react'
import HotelStyles from "../css/Hotel.module.css"
const Hotel = () => {
  return (
    <div className={HotelStyles.out}>
            <div className={HotelStyles.search}>
        <input type="text" placeholder="Search.." className={HotelStyles.bar}></input>
      </div>
      <div className={HotelStyles.infoa}>


        <div className={HotelStyles.hotela}>
          <div className={HotelStyles.hotelcardsa}>
            <div className={HotelStyles.lefta}>

              <div className={HotelStyles.namepositiona}>
                <p className={HotelStyles.namea}>ITC MARATHA</p>
                <div>
                  <p className={HotelStyles.addressa}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
                <div className={HotelStyles.ratinga}><h1 className={HotelStyles.rating_positiona}>4.9/5</h1></div>
              </div>

            </div>
            <div className={HotelStyles.righta}>
              {/* for image */}
            </div>
      </div>
      </div>
      </div>
      <div className={HotelStyles.review}>
     <h1 className={HotelStyles.reviewh1}>Reviews</h1>
     </div>
      <div className={HotelStyles.reviewcards}>

<div className={HotelStyles.sectiona}>
  <div className={HotelStyles.user_review}>
    <h1 className={HotelStyles.userh1}>Rosh Roger</h1>
    </div>
<div className={HotelStyles.userinput}>
  <p className={HotelStyles.userinputh1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque maiores quae fugiat ipsum dolore, temporibus minima, voluptatem molestiae obcaecati consequatur. Suscipit modi</p>
</div>
</div>
<div className={HotelStyles.sectionb}>
<div className={HotelStyles.user_review}>
    <h1 className={HotelStyles.userh1}>Rosh Roger</h1>
    </div>
<div className={HotelStyles.userinput}>
  <p className={HotelStyles.userinputh1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque maiores quae fugiat ipsum dolore, temporibus minima, voluptatem molestiae obcaecati consequatur. Suscipit modi</p>
</div>
</div>
<div className={HotelStyles.sectionc}>
<div className={HotelStyles.user_review}>
    <h1 className={HotelStyles.userh1}>Rosh Roger</h1>
    </div>
<div className={HotelStyles.userinput}>
  <p className={HotelStyles.userinputh1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque maiores quae fugiat ipsum dolore, temporibus minima, voluptatem molestiae obcaecati consequatur. Suscipit modi</p>
</div>
</div>
<div className={HotelStyles.sectiond}>
<div className={HotelStyles.user_review}>
    <h1 className={HotelStyles.userh1}>Rosh Roger</h1>
    </div>
<div className={HotelStyles.userinput}>
  <p className={HotelStyles.userinputh1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque maiores quae fugiat ipsum dolore, temporibus minima, voluptatem molestiae obcaecati consequatur. Suscipit modi</p>
</div>
</div>


      </div>
 
      <div className={HotelStyles.infob}>
        <h1 className={HotelStyles.topb}>Listed Hotels</h1>

        <div className={HotelStyles.hotelb}>
          <div className={HotelStyles.hotelcardsb}>
            <div className={HotelStyles.leftb}>

              <div className={HotelStyles.namepositionb}>
                <p className={HotelStyles.nameb}>ITC MARATHA</p>
                <div>
                  <p className={HotelStyles.addressb}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
              </div>

            </div>
            <div className={HotelStyles.rightc}>
              {/* for image */}
            </div>
          </div>
          <div className={HotelStyles.hotelcardsb}>

            <div className={HotelStyles.leftb}>

              <div className={HotelStyles.namepositionb}>
                <p className={HotelStyles.nameb}>ITC MARATHA</p>
                <div>
                  <p className={HotelStyles.addressb}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
              </div>

            </div>
            <div className={HotelStyles.righta}>
              {/* for image */}
            </div>
          </div>
          <div className={HotelStyles.hotelcardsb}>
            <div className={HotelStyles.leftb}>

              <div className={HotelStyles.namepositionb}>
                <p className={HotelStyles.nameb}>ITC MARATHA</p>
                <div>
                  <p className={HotelStyles.addressb}>International Airport (IA) Project Road, Sahar , Andheri (E), 400099 Mumbai, India </p>
                </div>
              </div>

            </div>
            <div className={HotelStyles.rightb}>
              {/* for image */}
            </div>
          </div>

        </div>
    


      
        <div className={HotelStyles.footer}>
<div className={HotelStyles.social}>
<div className={HotelStyles.socialcontent}>
<div className={HotelStyles.socialwidth}>
 <div> <img src='./Images/insta.png' className={HotelStyles.socialimg}></img> </div>

 <div>   <img src='./Images/twitter.png' className={HotelStyles.socialimg}></img></div>
 

 <div>  <img src='./Images/facebook.png' className={HotelStyles.socialimg}></img></div>
 
</div>
</div>
</div>
<div className={HotelStyles.issue}>
  <div className={HotelStyles.issuetext}>
<div className={HotelStyles.padding}>
  <p>About</p>
</div>
<div  className={HotelStyles.padding}>
  <p>Contact</p>
</div>
<div  className={HotelStyles.padding}>
  <p>help</p>
</div>
</div>
</div>
</div>
    

        </div>

      </div>
  
   
  )
}

export default Hotel
