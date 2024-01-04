import { ButtonProps, Variants } from "../../types";
import "./_ButtonStyle.scss";

interface BtnProps {
  btn: ButtonProps;
  children: React.ReactNode;
}

function Button({ btn, children }: BtnProps) {
  const { variant_key, onClick } = btn;

  const button: Variants = {
    primary: () => (
      <a role="botão" onClick={onClick} className="btn primary">
        {children}
      </a>
    ),
    secondary: () => (
      <a role="botão" onClick={onClick} className="btn secondary">
        {children}
      </a>
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
  };

  return button[variant_key]();
}

export default Button;
