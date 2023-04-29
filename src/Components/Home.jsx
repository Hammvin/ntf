import React from 'react';


const Home = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div style={{padding: '2rem'}}></div>
          <div className="header">
            <p className='header-text'>Home</p>
          </div>
          <div className="intro">
            <p>
            Welcome to the National Transformation Party (NTP), a political party dedicated to transforming our country to a just, equal and prosperous society. 
            The NTP was formed by a group of passionate citizens who are committed to positive changes through inclusive and collaborative efforts.
            We believe in citizens’ participation, transparency and accountability in all our activities. 
            The NTP encourages all our members to engage actively in our political activities and decision-making processes.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-1 col-lg-1"></div>
        <div className="col-sm-12 col-md-5 col-lg-5">
          <div className="mission-div">
            <div className="mission">
              <p className='mission-header'>Mission:</p>
            </div>
            <p className='mission-text'>
              To build a merit-based society governed by the principles of good governance, 
              constitutionalism and integrity in all spheres of public life.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6"></div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6"></div>
        <div className="col-sm-12 col-md-5 col-lg-5">
          <div className='vision-div'>
            <div className="vision">
              <p className='vision-header'>Vision:</p>
            </div>
            <p className='vision-text'>
              Transformation through restructuring of institutions and inculcation of integrity and social justice in our society.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-1 col-lg-1"></div>
      </div>

      

          <div className="leadership">
            <div className="leaders">
              <p className='leaders-header'>Leaders</p>
            </div>
            <div className="leader">
             
              {/* <div className="col-sm-12 col-md-3 col-lg-3">
                <div class="card" style={{width: "14rem"}}>
                  <img src={avatar} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Leader</h5>
                    <p class="card-text">Some quick example text.</p>
                    <button class="btn btn-warning">Open</button>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-sm-12 col-md-3 col-lg-3">
                <div class="card" style={{width: "14rem"}}>
                  <img src={avatar} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Leader</h5>
                    <p class="card-text">Some quick example text.</p>
                    <button class="btn btn-warning">Open</button>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-sm-12 col-md-3 col-lg-3">
                <div class="card" style={{width: "14rem"}}>
                  <img src={avatar} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Leader</h5>
                    <p class="card-text">Some quick example text.</p>
                    <button class="btn btn-warning">Open</button>
                  </div>
                </div>
              </div> */}
              
            </div>
          </div>
     
      
    </div>
  )
}

export default Home