import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import img2 from '../images/web.jpg';

const Login = () => {
   const history = useNavigate();
   const [email, setEmail] = useState('');
   const[password, setPassword] = useState('');

   const loginUser = async (e)=>{
      e.preventDefault();

      const res = await fetch("/signin", {
         method: "POST",
          headers: {
               "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email, password
          })
      });
      const data =  res.json();
      if(res.status===400 || !data){
         window.alert("Invalid Credential");
         
       } else {
         window.alert("Credential Success");
         
   
         history("/");
       }
   }

  return (
    <>
        
      <div id="contact" class="contact">
         <div class="container">
            <div class="row">
            <div className="col-md-6">
            <figure><img src={img2} /></figure>
               </div>

               <div class="col-md-6  ">
                  <form method='POST' class="main_form">
                     <div class="row">
               
                        <div class="col-sm-12">
                           <input class="contactus" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name=" Email" id='email'/>
                        </div>
                        <div className="col-sm-12">
                           <input className="contactus" placeholder="Your Password" value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id='password'/>
                        </div>
                        <div className="col-sm-12">
                           <input className="send" type='submit' name='signin' id='signin' value='Log In' onClick={loginUser}/>
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

export default Login;