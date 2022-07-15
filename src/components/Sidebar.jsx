import avatar from "../img/indice.jpeg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import Socialnetworks from "./Socialnetworks";
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Luiz Gustavo" />
      <p className="title">Desenvolvedor</p>
      <Socialnetworks />
      <InformationContainer />
      <a href="Dowload" className="btn">
        Dowload
      </a>
    </aside>
  );
};

export default Sidebar;
