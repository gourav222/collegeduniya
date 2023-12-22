import React, { useRef } from "react";
import "./RegisterModal.css";
import HelpCardData from "../../constants/HelpCardData";
import HelpCard from "./HelpCard/HelpCard";
import registerImage from "../../Images/register.png";
import close from "../../Images/close.png";
import ReactDom from "react-dom";
import Form from "./Form/Form";
import PeopleCard from "./PeopleCard/PeopleCard";
import validate from "../../validations/validate";
import axios from "axios";
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 2,
};
const RegisterModal = ({ setIsOpenRegisterModal }) => {
  const fullName = useRef("");
  const email = useRef("");
  const phoneNum = useRef("");
  const city = useRef("");
  const course = useRef("");

  const handleSubmit = () => {
    if (
      validate({
        fullName,
        email,
        city,
        phoneNum,
        course,
      })
    ) {
      axios
        .post("http://localhost:4000/api/v1/register", {
          fullName: fullName.current.value,
          email: email.current.value,
          phoneNumber: phoneNum.current.value,
          city: city.current.value,
          course: course.current.value,
        })
        .then((response) => {
          console.log("PP",response);
        })
        .catch((error) => {
          console.log(error);
        });
       alert("Registered successfully"); 
      setIsOpenRegisterModal(false);
    }
  };
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div className="register">
        <div className="register-1">
          <div>
            <p className="register-heading">
              How Collegedunia helps you in Admission
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {HelpCardData.map((item) => (
              <HelpCard key={item.id} image={item.img} title={item.title} />
            ))}
          </div>
          <div className="people-review">
            <h3>What people say</h3>
            <PeopleCard />
          </div>
        </div>
        <div className="register-2">
          <div className="apply-now">
            <div className="register-img">
              <img src={registerImage} alt="" />
            </div>
            <div className="register-text">
              <h2>Register Now To Apply</h2>
              <p>Get details and latest updates</p>
            </div>
            <div
              className="close"
              onClick={() => setIsOpenRegisterModal(false)}
            >
              <img src={close} alt="" />
            </div>
          </div>
          <div className="line"></div>
          <div>
            <Form
              fullName={fullName}
              email={email}
              phoneNum={phoneNum}
              city={city}
              course={course}
            />
          </div>
          <div className="terms-condition">
            <p>
              By submitting this form, you accept and agree to our{" "}
              <span>Terms of Use.</span>
            </p>
          </div>
          <div className="submit">
            <p>Already Registered? Click Here To Login.</p>
            <button onClick={handleSubmit}>SUBMIT</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("registerPortal")
  );
};

export default RegisterModal;
