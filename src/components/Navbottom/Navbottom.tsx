import { Link } from "react-scroll";

import { navIcons } from "../../constants/constants";
import "./_Navbottom.scss";
import useNavbottom from "./useNavbottom";

function Navbottom() {
  const { openCartMenu } = useNavbottom();

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
          <img
            src={icon.src}
            alt={icon.alt}
            id={`${icon.path === "car" ? "cartIcon" : ""}`}
            onClick={() => (icon.path === "car" ? openCartMenu() : null)}
          />
        </Link>
      ))}
    </section>
  );
}

export default Navbottom;
