import { React } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import slider1 from "../assets/img-back/slider1.jpg";
import slider2 from "../assets/img-back/slider2.jpg";
import slider3 from "../assets/img-back/slider3.jpg";

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{ 'height': '300px' }}>
                <img className="d-block slider-img" src={slider1} alt="first-slider" />
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '300px' }}>
                <img className="d-block slider-img" src={slider2} alt="second-slider" />
                <Carousel.Caption>
                    <Link to="/about">
                        <h2 className="text-14-slider">Details about us</h2>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '300px' }}>
                <img className="d-block slider-img" src={slider3} alt="third-slider" />
            </Carousel.Item>

        </Carousel>
    );
}
