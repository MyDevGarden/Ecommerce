import React from "react";
import Layout from "../components/BasicLayout/Layout";

const About = () => {
  return (
    <Layout title={'About Us - plantstore app'}>
       <div className="row contactus" >
        <div className="col-md-6" style={{border: "1px solid, black"}}>
        
        <img src='./images/contact.jpg' alt="contact" style={{width :"100%"}}/>
      
        </div>
        <div className="col-md-4" style={{border: "1px solid, black"}}>
          <h1 className="bg-success p2 text-white text-center">About US</h1>
          <p>We nurture our plants so they can nurture your soul. From our
greenhouses - spread over 25 acres - to your gardens, <span>we plant
seeds of peace and serenity in plant form.</span></p>
          
        </div>
      </div>
    </Layout>
  );
};

export default About;
