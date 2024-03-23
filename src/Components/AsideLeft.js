import React, { useState } from "react";
import "../CSS/Aside.css";
import facebook from "../Img/facebook.png";
import twitter from "../Img/twitter (1).png";
import instagram from "../Img/instagram.png";
import youtube from "../Img/youtube.png";
import linkedin from "../Img/linkedin.png";
const AsideLeft = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [thanksMessage, setthanksMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubscribe = () => {
    if (email.trim() === "") {
      // If email input is empty, display an error message
      setErrorMessage("* Please enter a valid email.");
      setthanksMessage(""); // Clear any previous thanks message
    } else if (!isValidEmail(email)) {
      // If the entered email is invalid, display an error message
      setErrorMessage("* Please enter a valid email format.");
      setthanksMessage(""); // Clear any previous thanks message
    } else {
      // Simulate a subscription process (you should replace this with a real backend call)
      console.log(`Subscribed with email: ${email}`);
      setSubscribed(true);
      setErrorMessage(""); // Clear any previous error message
      setEmail("");
      setthanksMessage("Thank you for subscribing! 🎉");
    }
  };
  return (
    <aside className="Asideleft">
      <div className="AdSBox">ADS Space</div>
      <div className="PopularWrap">
        <h2>Most Popular</h2>
        <div className="MostPopular"></div>
        <div className="MostPopular"></div>
        <div className="MostPopular"></div>
        <div className="MostPopular"></div>
        <div className="MostPopular"></div>
        <div className="MostPopular"></div>
        <div className="MostPopular"></div>
      </div>
      <div className="NewsLetterWrap">
        <h3>Be the First to Know</h3>
        <p className="Newslettext">Join our newsletter to get breaking news alerts and exclusive insights before anyone else.</p>
        <div className="NewsLetInputwrap">
        <input
          className="NewsInput"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          required={true}
        />
        <button className="NewsSubbutton" onClick={handleSubscribe}>
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
        </div>
        {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
        {thanksMessage && <p className="ThanksMessage">{thanksMessage}</p>}
      </div>
      <div className="AsideSocailProfileWrapper">
          <p>Connect with Us</p>
          <div className="AsideSocailIconWrap">
          <a
            className="AsideSocail"
            target="no_blank"
            href="https://www.facebook.com/BlogWiki"
          >
            <img alt="SocialMedia" src={facebook} />
          </a>
          <a
            className="AsideSocail"
            id="twitter"
            target="no_blank"
            href="https://www.twitter.com/BlogWiki_in"
          >
            <img alt="SocialMedia" src={twitter} />
          </a>
          <a
            className="AsideSocail"
            target="no_blank"
            href="https://www.instagram.com/blogwiki.in/"
          >
            <img alt="SocialMedia" src={instagram} />
          </a>
          <a
            className="AsideSocail"
            target="no_blank"
            href="https://www.youtube.com/@BlogWiki_in"
          >
            <img alt="SocialMedia" src={youtube} />
          </a>
          <a
            className="AsideSocail"
            target="no_blank"
            href="https://www.linkedin.com/company/blogwiki/"
          >
            <img alt="SocialMedia" src={linkedin} />
          </a>
          </div>
        </div>
    </aside>
  );
};

export default AsideLeft;
