import {Reviews} from '../Components/Reviews/Reviews'
import Carousel from 'react-bootstrap/Carousel';

import '../App.css'

export const Home = () => {
  // create a function inside reviews that pushes up a random artist for the carousel
  //use a function that extracts the artist name and match it with the logo for the banner
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="/images/Logos/twitter_header_photo_1.png"
            alt="First slide"
            className="carouselImage"
          />
          <Carousel.Caption>
            <h3>Music reviews, by the people who make it.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      
      </Carousel>
      <Reviews />
    </>
  );
}



{/* <Carousel.Item>
<img

  src="/images/FUCK_MONEY.webp"
  alt="Second slide"
/>

<Carousel.Caption>
  <h3>Second slide label</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  src="/images/holyfawn2022.jpg"
  alt="Third slide"
/>

<Carousel.Caption>
  <h3>Third slide label</h3>
  <p>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  </p>
</Carousel.Caption>
</Carousel.Item> */}