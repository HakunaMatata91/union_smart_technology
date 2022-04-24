import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WhyUts from "./WhuUst.png";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Container>
          <Row>
            <Col lg={12} md={12} xs={12}>
              <div className="about_title">
                <p>О нас</p>
              </div>
            </Col>
            <Col lg={8} md={6} xs={12}>
              <div className="about_img">
                <img src={WhyUts} alt="UTS" />
              </div>
            </Col>

            <Col lg={4} md={6} xs={12}>
              <div className="about_text">
                <h2>Почему UTS</h2>
                <p>
                  К услугам наших клиентов разработка программного обеспечения
                  на заказ, проектирование пользовательских интерфейсов,
                  создание сайтов (в том числе на основе индивидуальной CMS) и
                  их поддержка.
                </p>
                <p>
                  Мы также предлагаем услугу IT-консалтинга — налаживание работы
                  любых информационно-аналитических систем и онлайн-решений
                  компании для большей эффективности бизнес-процессов.
                </p>
                <p>
                  Сегодня компания «Union Smart Technology» имеет
                  представительства с умелыми project‑менеджерами в Словакии.
                </p>
                <p>
                  Такая география позволяет привлекать наиболее ответственных и
                  квалифицированных программистов и живо реагировать на
                  потребности заказчиков со всего света, сохраняя комфортный
                  уровень цен.
                </p>
              </div>
              <div className="about_button">
                <a
                  href="#"
                  className="btn btn-primary btn-lg "
                  role="button"
                  aria-pressed="true"
                >
                  Вакансии
                </a>
                <a
                  href="#"
                  className="btn btn-secondary btn-lg active"
                  role="button"
                  aria-pressed="true"
                >
                  Читать дальше
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
