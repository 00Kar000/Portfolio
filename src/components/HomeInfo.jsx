import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { myImg } from "../assets/images";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img className="w-4 h-4 object-contain" src={arrow} />
    </Link>
  </div>
);

const renderContect = {
  1: (
    <h1 className="relative sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-smeibold ">Karen 👋</span>
      <br />A Junior Frontend Developer from Armenia
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked a long tine as Freelancer and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years, Curios about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContect[currentStage] || null;
};

export default HomeInfo;
