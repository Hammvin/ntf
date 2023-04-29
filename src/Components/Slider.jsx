import Carousel from 'react-bootstrap/Carousel';
import avatar from '../images/avatar.jpg';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="row">
            <div className="col-sm-12 col-md-1 col-lg-1"></div>
            <div className="col-sm-12 col-md-5 col-lg-5">
                <img
                    className="d-block w-100"
                    src={avatar}
                    alt="First slide"
                />
                <div >
                    <div className='leader-title'>
                     <p><span className='slider-span'>Name:</span> Brian Ogola </p>
                    </div>
                    <div className='leader-title'>
                     <p><span className='slider-span'>Position:</span> Party Chairman </p>
                    </div>    
                </div>
                
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5">
                <img
                    className="d-block w-100"
                    src={avatar}
                    alt="First slide"
                />
                <div >
                    <div className='leader-title'>
                     <p><span className='slider-span'>Name:</span> Brian Ogola </p>
                    </div>
                    <div className='leader-title'>
                     <p><span className='slider-span'>Position:</span> Party Chairman </p>
                    </div>    
                </div>
            </div>
            <div className="col-sm-12 col-md-1 col-lg-1"></div>
        </div>      
      </Carousel.Item>
      <Carousel.Item>
      <div className="row">
            <div className="col-sm-12 col-md-1 col-lg-1"></div>
            <div className="col-sm-12 col-md-5 col-lg-5">
                <img
                    className="d-block w-100"
                    src={avatar}
                    alt="First slide"
                />
                <div >
                    <div className='leader-title'>
                     <p><span className='slider-span'>Name:</span> Brian Ogola </p>
                    </div>
                    <div className='leader-title'>
                     <p><span className='slider-span'>Position:</span> Party Chairman </p>
                    </div>    
                </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5">
                <img
                    className="d-block w-100"
                    src={avatar}
                    alt="First slide"
                />
                <div >
                    <div className='leader-title'>
                     <p><span className='slider-span'>Name:</span> Brian Ogola </p>
                    </div>
                    <div className='leader-title'>
                     <p><span className='slider-span'>Position:</span> Party Chairman </p>
                    </div>    
                </div>
            </div>
            <div className="col-sm-12 col-md-1 col-lg-1"></div>
        </div>  
      </Carousel.Item>
      <Carousel.Item>
      <div className="row">
            <div className="col-sm-12 col-md-1 col-lg-1"></div>
            <div className="col-sm-12 col-md-5 col-lg-5">
                <img
                    className="d-block w-100"
                    src={avatar}
                    alt="First slide"
                />
                <div >
                    <div className='leader-title'>
                     <p><span className='slider-span'>Name:</span> Brian Ogola </p>
                    </div>
                    <div className='leader-title'>
                     <p><span className='slider-span'>Position:</span> Party Chairman </p>
                    </div>    
                </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5">
                <img
                    className="d-block w-100"
                    src={avatar}
                    alt="First slide"
                />
                <div >
                    <div className='leader-title'>
                     <p><span className='slider-span'>Name:</span> Brian Ogola </p>
                    </div>
                    <div className='leader-title'>
                     <p><span className='slider-span'>Position:</span> Party Chairman </p>
                    </div>    
                </div>
            </div>
            <div className="col-sm-12 col-md-1 col-lg-1"></div>
        </div>  
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;