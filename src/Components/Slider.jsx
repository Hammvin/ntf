import Carousel from 'react-bootstrap/Carousel';
import Townhall from '../images/Townhall.jpeg';
import Meet from '../images/Meet.jpeg';
import Rally from '../images/Rally.jpeg';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={Townhall}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Townhall meeting</h3>
          <p>A meeting with the youth to get their views.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={Rally}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Initial rally</h3>
          <p>A meeting with the public to share our vision.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={Meet}
          alt="Third slide"

        />

        <Carousel.Caption>
          <h3>Meet and greet</h3>
          <p>
            An impromtu meet and greet with the citizens.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;