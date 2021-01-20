import React from 'react';
import Data from '../config.json';

const About = () => {


   var name = Data.main.name;
   var profilepic = "images/" + Data.main.image;
   var bio = Data.main.bio;
   var city = Data.main.address.city;
   var state = Data.main.address.state;
   var zip = Data.main.address.zip;
   var phone = Data.main.phone;
   var email = Data.main.email;
   var resumeDownload = Data.main.resumedownload;

   return (
      <section id="about">
         <div className="row">
            <div className="col-10 col-md-7 mx-auto aboutBackground" style={{marginTop:"40px"}}>
               <div className="aboutContent">

                  <div className="row">
                     <div className="col col-md-4">
                        <img className="profile-pic" src={profilepic} alt="Profile Pic" />
                     </div>
                     <div className="col col-md-8">
                        <h2>About Me</h2>
                        <p className=""><pre className="preContent">{bio}</pre></p>
                        <div className="row">
                           <div className="columns contact-details">
                              <h2>Contact Details</h2>
                              <p className="address" style={{fontFamily:"cursive"}}>
                                 <span>{name}</span><br />
                                 <span>
                                    {city} {state}, {zip}
                                 </span><br />
                                 <span>{phone}</span><br />
                                 <span>{email}</span>
                              </p>
                           </div>
                           <div className="columns download">
                              <p>
                                 <a href={resumeDownload} className="button"><i className="fa fa-download"></i> Resume </a>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>


               </div>
            </div>
         </div>

      </section>
   );
}


export default About;
