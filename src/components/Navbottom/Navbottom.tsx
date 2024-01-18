import { Link } from "react-scroll";

import { navIcons } from "../../constants/constants";
import "./_Navbottom.scss";
import useNavbottom from "./useNavbottom";

function Navbottom() {
  const { products, toggleCartMenu } = useNavbottom();

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
          <div
            className={`navbottom__icon ${
              icon.path === "car" && products.length > 0 ? "has--item" : ""
            }`}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              data-testid={`${icon.path === "car" ? "cart-icon" : ""}`}
              id={`${icon.path === "car" ? "cartIcon" : ""}`}
              role="button"
              onClick={() => (icon.path === "car" ? toggleCartMenu() : null)}
              width="24"
              height="24"
            />
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Navbottom;
