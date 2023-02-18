import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import teddy1 from "../assets/images/png/teddy1.png";
import teddy2 from "../assets/images/png/teddy2.png";
import teddy3 from "../assets/images/png/teddy3.png";
const Teddy = () => {
  return (
    <>
      <section className="teddy_background py-5">
        <Container>
          <Row className="py-5 my-5">
            <Col md={6} lg={4}>
              <div>
                <img className="w-100" src={teddy1} alt="teddy1" />
                <p className="ff_philosopher fw_bold fs_xl text-white text-center mw_340 mt-4">
                  <span className="text_primary"> 20% Off</span> For First Time
                  Customers
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div>
                <img className="w-100" src={teddy2} alt="teddy2" />
                <p className="ff_philosopher fw_bold fs_xl text-white text-center  mw_340 mt-4">
                  Purple Panda’s{" "}
                  <span className="text_primary">Picks Of The week</span>
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div>
                <img className="w-100" src={teddy3} alt="teddy3" />
                <p className="ff_philosopher fw_bold fs_xl text-white text-center  mw_340 mt-4">
                  <span className="text_primary"> Collect rewards</span> points
                  every time you purchase
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Teddy;
