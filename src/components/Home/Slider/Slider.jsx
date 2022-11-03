import React from 'react'

const Slider = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/eaf14d1c-856b-4ec1-a0df-8c8c1e04212f___ccec88b31532b96dcec4cecc676dc997.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/56f8411f-9968-4f48-9f40-f6ece7a7f6c0___cc44f31df55dcce7e4032569e05e894f.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/12e7ccb6-6a3f-4d1a-88d0-3fd289dddb4d___099459e574d44a242f32cd0deed08276.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;