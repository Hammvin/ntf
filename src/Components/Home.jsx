import React from 'react';
import Card from 'react-bootstrap/Card';
import avatar from '../images/avatar.jpg';
import Agness from '../images/Agness.jpeg';
import Brian from '../images/Brian.jpeg';
import Maurice from '../images/Maurice.jpeg';
import Paul from '../images/Paul.jpeg';

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
          {/* <div className="slider">
            <Slider />
          </div> */}
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
            <br />
            <div className="row">
             <div className="col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='leader' src={Agness}/>
                  <Card.Body>
                    <div className='salutation'>
                      <div>
                        <p className='leader-txt'><span className='leaderlbl'>Name: </span>Agness Momanyi</p>
                      </div>
                      <div>
                        <p className='leader-txt'><span className='leaderlbl'>Title: </span>Secretary General</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
             </div>
             <div className="col-sm-12 col-md-4 col-lg-4">
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='leader' src={Paul} />
                  <Card.Body>
                    <div  className='salutation'>
                      <div>
                        <p className='leader-txt'><span className='leaderlbl'>Name: </span>Paul Ong'ondo</p>
                      </div>
                      <div>
                        <p className='leader-txt'><span className='leaderlbl'>Title: </span>NEC Member</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
             </div>
             <div className="col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='leader' src={Brian} />
                  <Card.Body>
                  <div  className='salutation'>
                    <div>
                      <p className='leader-txt'><span className='leaderlbl'>Name: </span>Brian Ogola</p>
                    </div>
                    <div>
                      <p className='leader-txt'><span className='leaderlbl'>Title: </span>NEC Chairman</p>
                    </div>
                  </div>
                  </Card.Body>
                </Card>
             </div>
            </div>
            <br />
            <div className="row">
             <div className="col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='leader' src={Maurice} />
                  <Card.Body>
                    <div  className='salutation'>
                      <div>
                        <p className='leader-txt'><span className='leaderlbl'>Name: </span>Maurice Mulinge</p>
                      </div>
                      <div>
                        <p className='leader-txt'><span className='leaderlbl'>Title: </span>Organizing Secretary</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
             </div>
             <div className="col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='leader' src={avatar} />
                  <Card.Body>
                    <div  className='salutation'>
                      <div>
                        <p className='leader-txt'><span className='leaderlbl'>Name: </span></p>
                      </div>
                      <div>
                        <p className='leader-txt'><span className='leaderlbl'>Title: </span></p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
             </div>
             <div className="col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top"  className='leader' src={avatar} />
                  <Card.Body>
                    <div  className='salutation'>
                        <div>
                          <p className='leader-txt'><span className='leaderlbl'>Name: </span></p>
                        </div>
                        <div>
                          <p className='leader-txt'><span className='leaderlbl'>Title: </span></p>
                        </div>
                      </div>
                  </Card.Body>
                </Card>
             </div>
            </div>
          </div><br />
    </div>
  )
}

export default Home