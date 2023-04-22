import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import img2 from '../images/web.jpg';

const Signup = () => {
   const history = useNavigate();
  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cppassword:""
  });
  
  let name, value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});

  }

  const postData = async (e) =>{
   e.preventDefault();

   const { name, email, phone, work, password, cppassword}= user;

   const res = await fetch("/register",{
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body:JSON.stringify({
         
         name, email, phone, work, password, cppassword
        
      })
    });
    const data = await res.json();
    if(res.status===422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Success");
      console.log("Registration Success");

      history("/login");
    }
  }

  return (
    <>
    
    <div id="contact" className="contact">
         <div className="container">
          
            <div className="row">
            <div className="col-md-6">
            <figure><img src={img2} /></figure>
            <NavLink className="nav-link" to='/login' >already login</NavLink>
               </div>

               <div className="col-md-6  ">
                <h2><b>Sign Up</b></h2>
                  <form className="main_form">
                    
                     <div className="row">
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Your Name" type="text" name="name" id='name' value={user.name} onChange={handleInputs} autoComplete='off'/>
                        </div>
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Your Email" type="email" name="email" id='email'  value={user.email} onChange={handleInputs}/>
                        </div>
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Your Phone" type="text" name="phone" id='phone' value={user.phone} onChange={handleInputs}/>
                        </div>
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Your Profession" type="text" name="work" id='work' value={user.work} onChange={handleInputs}/>
                        </div>
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Your Password" type="text" name="password" id='password' value={user.password} onChange={handleInputs}/>
                        </div>
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Confirm Your Password" type="text" name="cppassword" id='cppassword' value={user.cppassword} onChange={handleInputs}/>
                        </div>
                        
                        <div className="col-sm-12">
                           <input className="send" type='submit' name='signup' id='signup' value='register' onClick={postData}/>
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

export default Signup;