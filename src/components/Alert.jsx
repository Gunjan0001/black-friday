import React from "react";
import { Container } from "react-bootstrap";
import spaceman from "../assets/images/png/spaceman.png";
import twinkle from "../assets/images/png/twinkle.png";
import cloud from "../assets/images/png/cloud.png";
const Alert = () => {
  return (
    <section className="background py-5 position-relative">
      <img
        className="position-absolute w-100 twinkleimg_set h-100 d-none d-sm-block"
        src={twinkle}
        alt="twinkle"
      />
      <img
        className="position-absolute cloud1_set d-none d-sm-block cloud_animation"
        src={cloud}
        alt="cloud"
      />
      <img
        className="position-absolute cloud2_set d-none d-sm-block cloud2_animation"
        src={cloud}
        alt="cloud"
      />
      <img
        className="position-absolute cloud3_set d-none d-xl-block cloud_animation"
        src={cloud}
        alt="cloud"
      />
      <img
        className="position-absolute cloud4_set d-none d-sm-block cloud2_animation"
        src={cloud}
        alt="cloud"
      />
      <img
        className="position-absolute cloud5_set d-none d-sm-block cloud3_animation"
        src={cloud}
        alt="cloud"
      />
      <Container>
        <div>
          <h2 className="ff_philosopher fw_bold fs_2xl text-white text-center">
            Potent Cannabis <span className="clr_1"> Alert</span>
          </h2>
          <p className="ff_montserrat fw_regular fs_md text-white text-center">
            click here to try our most potent hand picked craft cannabis
          </p>
        </div>
        <div className=" d-flex flex-column justify-content-center align-items-center position-relative">
          <img className="spaceman_image" src={spaceman} alt="spaceman" />
          <button className="ff_montserrat fw_bold fs_xmd text-white primary_btn position-absolute alertbtn_set">
            Take me to space cannabis
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Alert;
