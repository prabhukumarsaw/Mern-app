import React from 'react';
import img from '../images/ima.png';
const Home = () => {
  return (
    <>
    

          <section className="banner_main">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-5">
                  <div className="text-bg">
                     <h1>Power ful<br/> Web Hosting</h1>
                     <span>Landing Page 2019</span>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="text-img">
                     <figure><img src={img} /></figure>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </>
  )
}

export default Home;