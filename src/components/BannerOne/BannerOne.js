import bannerOne from "@/data/bannerOne";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import { useState } from "react";

const { images, tagline, title } = bannerOne;

const BannerOne = () => {

  const [firstName, setFirstName] = useState("");
  
    const resetInputFields = () => {
      setTimeout(() => {
        setFirstName("");
      }, 3000);
    };
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const body = {firstName};
        await fetch("/api/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      console.log('bbebebeebe');
    
      alert('aaaa')
     
      } catch (error) {
        console.error(error);
      }
    };











  const ref = useActive("#home");

  return (
    <section ref={ref} className="banner-one" id="home">
      {Array.from(Array(6)).map((_, i) => (
        <span key={i} className={`banner-one__shape-${i + 1}`}></span>
      ))}
      {images.map(({ id, image, className }) => (
        <Image
          key={id}
          src={require(`src/assets/images/${image}`).default.src}
          className={className}
          alt="Awesome Image"
        />
      ))}
      <Container>
        <Row>
          <Col xl={6}>
            <div className="banner-one__content">
              <p className="banner-one__tag-line">
                {tagline} <a href="#"></a>
              </p>
              <h3 className="banner-one__title">
                <TextSplit text={title} />
              </h3>
              <div>
      <h2 className="banner-one__tag-line">subscribe to our email</h2>
    </div>
    
              <form className="form-group" onSubmit={submitHandler}>

<input
  type="email"
  
  className="form-field"
  placeholder="Email"
  autoFocus
  onChange={(e) => setFirstName(e.target.value)}
  value={firstName}
/>
 <input
  type="submit"
  value="Submit"
  className="submit-btn"
  onClick={resetInputFields}
/>
</form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerOne;
