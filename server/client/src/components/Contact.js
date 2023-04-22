import React from 'react'

const Contact = () => {
  return (
    <>
    <br/><br/>
<div className='container'>
<div className="row">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Email</h5>
        <p className="card-text">Alpha@technical.com</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Phone</h5>
        <p className="card-text">9188321373</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Address</h5>
        <p className="card-text">Delhi, India</p>
      </div>
    </div>
  </div>
</div>
</div>
      
      <div id="contact" className="contact">
        <center><h2><strong>Get in Touch</strong></h2></center>
         <div className="container">
            <div className="row">
               <div className="col-md-6 offset-md-3 ">
                  <form className="main_form">
                     <div className="row">
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Name" type="text" name="Name"/>
                        </div>
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Email" type="text" name=" Email"/>
                        </div>
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Phone" type="text" name="Phone"/>
                        </div>
                        <div className="col-sm-12">
                           <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                        </div>
                        <div className="col-sm-12">
                           <button className="send">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>

     
    
  
    
    </>
  )
}

export default Contact;