import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='container-fluid bg-warning footer'>
        <div className="row">
            <div className="col-sm-12 col-md-1 col-lg-1"></div>
            <div className="col-sm-12 col-md-10 col-lg-10 ">
                <div className="row">
                    <div className=''>
                        <p className='footer-heading'>Some convenience links</p>
                    </div>
                    <div className="col-ms-12 col-md-4 col-lg-4 footerlink">
                        <ul>
                            <li>
                                <Link to='/' className='footer-links' >Home</Link>
                            </li>
                            <li>
                                <Link to='/about' className='footer-links'>About Us</Link>
                            </li>
                            <li>
                                <Link to='/involve' className='footer-links'>Get Involved</Link>
                            </li>
                            <li>
                                <Link to='/issues' className='footer-links'>Issues</Link>
                            </li>
                            <li>
                                <Link to='/news' className='footer-links'>News Updates</Link>
                            </li>
                            <li>
                                <Link to='/contacts' className='footer-links'>Contacts</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-ms-12 col-md-3 col-lg-3 social-links">
                        <ul>
                            <li>
                                <Link to='' className='footer-social'><BsLinkedin size="1.5rem"/></Link>
                            </li>
                            <li>
                                <Link to='' className='footer-social'><BsFacebook size="1.5rem"/></Link>
                            </li>
                            <li>
                                <Link to='' className='footer-social'><AiFillTwitterCircle size="1.5rem"/></Link>
                            </li>
                            <li>
                                <Link to='' className='footer-social'><AiFillInstagram size="1.5rem"/></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-ms-12 col-md-3 col-lg-3"></div>
                </div>
            </div>
            <div className="col-sm-12 col-md-1 col-lg-1"></div>
        </div>
        
    </div>
  )
}

export default Footer