import "../index.css";
import botImg from "../images/bot-img.png";
import topImg from "../images/top-img.png";

const BackgroundImages = () => {
  return (
    <>
      <img className="top--img" src={topImg} aria-hidden="true" />
      <img className="bot--img" src={botImg} aria-hidden="true" />
    </>
  );
};

export default BackgroundImages;
