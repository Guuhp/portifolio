import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/Socialnetworks.sass";

const socialnetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    site: "https://www.linkedin.com/in/luiz-gustavo-26a3b1161/",
  },
  { name: "github", icon: <FaGithub />, site: "https://github.com/Guuhp" },
  {
    name: "instagram",
    icon: <FaInstagram />,
    site: "https://www.instagram.com/lluiz_gustavoo/",
  },
];
const Socialnetworks = () => {
  return (
    <section id="social-networks">
      {socialnetworks.map((network) => (
        <a
          href={network.site}
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default Socialnetworks;
