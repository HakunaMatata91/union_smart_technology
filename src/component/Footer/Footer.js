import React, { Component } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Footer.scss";
import linkedin from "../Pages/Contact/RegistrationForm/img/LinkedIn.svg";
import google from "../Pages/Contact/RegistrationForm/img/Google.svg";
import facebook from "../Pages/Contact/RegistrationForm/img/Facebook.svg";
import dribble from "../Pages/Contact/RegistrationForm/img/Dribbble.svg";
import instagram from "../Pages/Contact/RegistrationForm/img/Instagram.svg";

function GetCompanyAddress(props) {
  return (
    <div className="footer_item">
      <h4>{props.name}</h4>
      <div className="footer_contact">
        <p>
          <a href={"mailto:" + props.email}>{props.email}</a>
        </p>
        <p>
          <a href={"tel:" + props.tel}>{props.tel}</a>
        </p>
      </div>
      <p>{props.address}</p>
    </div>
  );
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col lg={3} md={3} xs={6}>
              <GetCompanyAddress
                name="Украинcкая команда"
                email="contact@unionsmarttech.org"
                tel="+380 94 539-852"
                address="24 Entuziastov stree, Ukraine, 191 119"
              />
            </Col>
            <Col lg={3} md={3} xs={6}>
              <GetCompanyAddress
                name="Словакская команда"
                email="contact@unionsmarttech.org"
                tel="+380 94 539-852"
                address="24 Entuziastov stree, Ukraine, 191 119"
              />
            </Col>
            <Col lg={2} md={2} xs={12}>
              <div className="footer_navigation">
                <Nav.Link href="#action1">Главная</Nav.Link>
                <Nav.Link href="#about">Команда</Nav.Link>
                <Nav.Link href="#action3">Услуги</Nav.Link>
              </div>
            </Col>
            <Col lg={2} md={2} xs={12}>
              <div className="footer_navigation">
                <Nav.Link href="#action4">Карьера</Nav.Link>
                <Nav.Link href="#action5">Портфолио</Nav.Link>
                <Nav.Link href="#action6">Контакты</Nav.Link>
              </div>
            </Col>
            <Col lg={2} md={2} xs={12}>
              <div className="footer_social">
                <a href="https://www.linkedin.com">
                  <p>linkedin</p>
                  <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://www.google.com">
                  <p>google</p>
                  <img src={google} alt="google" />
                </a>
                <a href="https://www.facebook.com">
                  <p>facebook</p>
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.dribble.com">
                  <p>dribble</p>
                  <img src={dribble} alt="dribble" />
                </a>
                <a href="https://www.instagram.com">
                  <p>instagram</p>
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <div className="footer_about">
                <span>Разработка: студия ЯР</span>
              </div>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <div className="footer_cookies">
                <a href="Политика конфиденциальности">
                  Политика конфиденциальности
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
