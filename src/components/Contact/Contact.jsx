import { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

import LinkedIn from "../../assets/img/svg/LinkedIn_icon.svg";
const urlLinkedIn = "https://www.linkedin.com/in/nicolas-lauzon-907616269";

import GMail from "../../assets/img/svg/Gmail_icon.svg";
const courriel = "nicolas.lauzon01@gmail.com";

import Dribble from "../../assets/img/svg/Dribbble_icon.svg";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = courriel;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <section className="contact__container">
      <section className="contact" id="contact">
        <div className="contact__inner">
          <div className="contact__infos">
            <h3>Contact</h3>

            <div className="icones">
              <div className="gmail">
                <img src={GMail} onClick={handleEmailClick} />
                {emailCopied && (
                  <span style={{ marginLeft: "5px", color: "var(--rouge)" }}>
                    Copié!
                  </span>
                )}
              </div>
              <div className="linkedin">
                <Link to={urlLinkedIn} target="_blank">
                  <img src={LinkedIn} alt="" />
                </Link>
              </div>
              <div className="dribble">
                <Link to="https://dribbble.com/khaki76" target="_blank">
                  <img src={Dribble} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </section>
  );
};

export default Contact;
