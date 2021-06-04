import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import './Slider.css'

const Slider = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={true}
        className=""
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src='https://instabug.com/assets/images/svgs/heroes/Product-overview.svg'
                alt="First slide"
              />
              <h4 className="slider-txt">Accelerate Your Entire Mobile Team Workflow</h4>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src='https://instabug.com/assets/images/svgs/heroes/Products-bug-reporting.svg' 
                alt="Second slide"
              />
               <h4 className="slider-txt">The Most Compprehenssive Bug Reporting Tool For Mobile Apps</h4>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src='https://instabug.com/assets/images/svgs/heroes/Products-crash-reporting.svg' 
                alt="Third slide"
              />
               <h4 className="slider-txt">Secure Crash Reporting With Real-Time Alerts</h4>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Slider;
  