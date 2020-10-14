import React from 'react';
import './Contact.css';

const name = "Don hopkins";
const avatar = "https://randomuser.me/api/portraits/men/71.jpg" ;
const onLine = true;  

function Contact(){
    return(
        <div className="Contact">
    
        <div>
           

            <img className="avatar" src={avatar} alt= "profil"/>
            <div>  
               <div className="name">{name}</div>  
               <div className="status">
                
                  <p className="status-text">{onLine? <div className="status-online"></div>: <div className="status-offline"></div>}</p>
                  <p className="status-text">{onLine? "online":"offline"}</p>
                
            </div>


        </div>




      </div>
        </div>
    )
}
export default Contact;
