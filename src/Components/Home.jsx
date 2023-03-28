import React from 'react';
import avatar from '../images/avatar.jpg'

const Home = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="header">
            <h1>Home</h1>
          </div>
          <div className="intro">
            <p>
            Welcome to the National Transformation Party (NTP), a political party dedicated to transforming our nation for the better. 
            We are a group of passionate citizens who believe that positive change can only come through inclusive and collaborative efforts.
            We believe in the power of democracy and the importance of citizen participation in shaping the future of our country. 
            That's why we are committed to transparency and accountability in all our activities, 
            and we encourage all our members to engage actively in our political processes.
            </p>
          </div>
          <div className="mission">
            <p className='mission-header'>Mission</p>
            <p>To build a merit-based society governed by the principles of good governance and integrity in all spheres of public service.</p>
          </div>
          <div className='vision'>
            <p className='vision-header'>Vision:</p>
            <p>Transformation through restructuring of institutions and inculcation of social justice in the society.</p>
          </div>
          <div className="leadeship row">
            <div className="leaders">
              <p className='leaders-header'>Leaders</p>
            </div>
            <div className="leader">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <div class="card" style={{width: "14rem"}}>
                  <img src={avatar} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Leader</h5>
                    <p class="card-text">Some quick example text.</p>
                    <button class="btn btn-warning">Open</button>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-3 col-lg-3">
                <div class="card" style={{width: "14rem"}}>
                  <img src={avatar} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Leader</h5>
                    <p class="card-text">Some quick example text.</p>
                    <button class="btn btn-warning">Open</button>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-3 col-lg-3">
                <div class="card" style={{width: "14rem"}}>
                  <img src={avatar} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Leader</h5>
                    <p class="card-text">Some quick example text.</p>
                    <button class="btn btn-warning">Open</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>
     
      
    </div>
  )
}

export default Home