import React, { Component } from "react";
import "./Services.scss";
import backgroundServices from "./img/ourProduct_bg.png";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Services1 from "./img/info_block1.png";
import Services2 from "./img/info_block2.png";
import Services3 from "./img/info_block3.png";
import Services4 from "./img/info_block4.png";
import Services5 from "./img/info_block5.png";

function GetCarouselItem(props) {
  if (props.direction === undefined || !props) {
    return <div />;
  }
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props.deviceType !== "mobile"}
      autoPlaySpeed={1000}
      additionalTransfrom={props.direction ? 0 : 3}
      keyBoardControl={false}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="item">
        <img src={Services1} alt="client1" />
        <h5 className="card-title">Быстрое масштабирование</h5>
      </div>
      <div className="item">
        <img src={Services2} alt="client1" />
        <h5 className="card-title">Прозрачное взаимодействие</h5>
      </div>
      <div className="item">
        <img src={Services3} alt="client1" />
        <h5 className="card-title">Смешанные команды</h5>
      </div>
      <div className="item">
        <img src={Services4} alt="client1" />
        <h5 className="card-title">ПРОИЗВОДСТВО ЦИФРОВЫХ РЕШЕНИЙ</h5>
      </div>
      <div className="item">
        <img src={Services5} alt="client1" />
        <h5 className="card-title">ОТКРЫТОСТЬ</h5>
      </div>
    </Carousel>
  );
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 13, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 390, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class Services extends Component {
  render() {
    return (
      <div
        className="Services"
        style={{ backgroundImage: `url(${backgroundServices})` }}
      >
        <Container>
          <Row>
            <Col xl={7} lg={7} xs={12}>
              <div className="Services_info">
                <p>Как мы выполняем</p>
                <h2>Наши проекты</h2>
                <span>
                  Мы осуществляем технологическую и бизнес-трансформацию,
                  используя методологию Agile, проверенные на практике платформы
                  для организации совместной работы с заказчиком, передовые
                  инструменты для разработки, многопрофильные команды
                  специалистов с различными навыками и распределенную глобальную
                  модель оказания услуг.
                </span>
                <div className="Services_button">
                  <a
                    href="#"
                    className="btn btn-primary4"
                    role="button"
                    aria-pressed="true"
                  >
                    Заказать проект
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={7} lg={7} xs={12}>
              <div className="Services_cooperation">
                <p>Сотрудничество</p>
                <h2>С учетом ваших потребностей</h2>
              </div>
            </Col>
            <Col xl={12} lg={12} xs={12}>
              <div className="Services_cooperation">
                <GetCarouselItem direction="true" responsive="true" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Services;
