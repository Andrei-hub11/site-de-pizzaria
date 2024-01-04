import { Link } from "react-scroll";

import { navIcons } from "../../constants/constants";
import "./_Navbottom.scss";

function Navbottom() {
  return (
    <section className="navbottom">
      {navIcons.map((icon) => (
        <Link
          key={icon.alt}
          activeClass="active"
          to={icon.path}
          spy={true}
          smooth={true}
          duration={100}
        >
          <img src={icon.src} alt={icon.alt} />
        </Link>
      ))}
    </section>
  );
}

export default Navbottom;
