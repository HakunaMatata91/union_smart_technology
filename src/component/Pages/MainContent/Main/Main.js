import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import background from "./img/bg.png";
import "./Main.scss";
import Header from "../../../Header/Header";

class Main extends Component {
  render() {
    return (
      <div className="main" style={{ backgroundImage: `url(${background})` }}>
        <Header/>
        <Container>
          <Row>
            <Col xl={9} lg={12} md={12} sm={12}>
              <div className="main_block">
                <div className="main_title">
                  Студия разработки программного обеспечения
                </div>
                <div className="main_sub">с продуктовым мышлением</div>
                <div className="main_subtext">
                  Мы создаем кроссплатформенные мобильные приложения и
                  веб-платформы и находим для них лучшие решения.
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Заказать проект
              </button>
            </Col>
          </Row>
          <Row>
            <Col lg={3} xs={6}>
              <div className="benefits">
                <span>4+</span>
                <p>Года опыта</p>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="benefits">
                <span>4+</span>
                <p>Года опыта</p>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="benefits">
                <span>30+</span>
                <p>Завершенных проекта</p>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="benefits">
                <span>4+</span>
                <p>Года опыта</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
