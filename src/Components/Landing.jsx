import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowCircleRight} from 'react-icons/hi';


const Landing = () => {
  return (
    <div className="row landing-outer"> 
        <div className="col-sm-12 col-md-2 col-lg-2 space"></div>
        <div className="col-sm-12 col-md-5 col-lg-5 ">
            <div className="landing-inner">
            <div style={{padding: '2rem'}}></div>
                <div className='landing-text'>
                    <p className='emblem'>NATIONAL TRANSFORMATION PARTY</p>
                </div>
                <div className='landing-text'>
                    <p className='landing-txt'>Building a better Kenya one step at a time.</p>
                </div>
                <div className='landing-text'>
                    <p className='landing-txt'>Join the National Transformation Party Today !</p>
                </div>
                <div>
                    <Link to={'involve'}><button className='btn btn-md btn-warning'>Get Involved <HiOutlineArrowCircleRight /></button></Link>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5 space"></div>
    </div>
  )
}

export default Landing