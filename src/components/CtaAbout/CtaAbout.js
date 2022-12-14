import ctaAbout from "@/data/ctaAbout";
import React from "react";
import useActive from "@/hooks/useActive";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { image, title, text, lists } = ctaAbout;

const CtaAbout = () => {
const ref = useActive("#services")

  
  return (
    <section className="cta-three">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="cta-three__image">
              <Image src={image.src} alt="Awesome Image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="cta-three__content">
              <div className="block-title text-left">
                <h2 className="block-title__title black-text-color">
                  <TextSplit text={title} />
                </h2>
              </div>
              <p className="cta-three__text">{text}</p>
              <ul className="cta-three__list">
                {lists.map((text, i) => (
                  <li key={i} className="cta-three__list-item">
                    <i className="fa fa-check"></i>
                    {text}
                  </li>
                ))}
              </ul>
              <a href="#" className="thm-btn cta-three__btn">
             
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaAbout;
