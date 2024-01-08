import { motion, useAnimation } from "framer-motion";

import { ButtonProps, Variants } from "../../types";
import "./_ButtonStyle.scss";

interface BtnProps {
  btn: ButtonProps;
  children: React.ReactNode;
}

function Button({ btn, children }: BtnProps) {
  const { variant_key, onClick } = btn;

  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      rotate: [0, 3, -3, 1, 0],
      transition: { duration: 0.7, ease: "easeInOut" },
    });
  };

  const button: Variants = {
    primary: () => (
      <a role="botão" onClick={onClick} className="btn primary">
        {children}
      </a>
    ),
    secondary: () => (
      <motion.a
        role="botão"
        onClick={(e) => {
          onClick && onClick(e);
          startAnimation();
        }}
        className="btn secondary"
        animate={controls}
      >
        {children}
      </motion.a>
    ),
    tertiary: () => (
      <a role="botão" onClick={onClick} className="btn tertiary">
        {children}
      </a>
    ),
    quaternary: () => (
      <a role="botão" onClick={onClick} className="btn tertiary quaternary">
        {children}
      </a>
    ),
    quinary: () => (
      <a role="botão" onClick={onClick} className="btn tertiary quinary">
        {children}
      </a>
    ),
  };

  return button[variant_key]();
}

export default Button;
