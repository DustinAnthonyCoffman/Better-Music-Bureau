import Carousel from 'react-bootstrap/Carousel';

export const Header = () => {
    return (
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
    )
}
