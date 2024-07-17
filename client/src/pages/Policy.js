import React from 'react'
import Layout from '../components/BasicLayout/Layout';

const Policy = () => {
    return (
      <Layout title={'Policy - plantstore app'}>
      <div className="row contactus" >
       <div className="col-md-6" style={{border: "1px solid, black"}}>
       
       <img src='./images/contact.jpg' alt="contact" style={{width :"100%"}}/>
     
       </div>
       <div className="col-md-4" style={{border: "1px solid, black"}}>
         <h1 className="bg-success p2 text-white text-center">About US</h1>
         At MyDreams we recognize that privacy is very important. We promise to respect your contact preferences and to protect your private information. This Privacy Policy describes the information that is collected, how it is used and with whom it might be shared. This Privacy Policy applies to all of the services and products offered by 
         
       </div>
     </div>
   </Layout>
      );
}

export default Policy