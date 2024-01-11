import { AnimationControls } from "framer-motion";

export type Product = {
  id: string;
  type: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type Feature = {
  icon: string;
  title: string;
  information: string;
};

export type ButtonProps = {
  variant_key: string;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void | undefined;
  animationControls?: AnimationControls;
};

export type Variants = Record<string, () => React.ReactNode>;

export type SpecialMenu = {
  id: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  information: string;
  type: string;
  price: number;
  control: {
    price: string;
  };
};

type DrinksMenu = SpecialMenu;

export default DrinksMenu;

export type MenuItem = {
  front: {
    id: string;
    item: {
      imgSrc: string;
      imgAlt: string;
      title: string;
      information: string;
      type: string;
      control: {
        price: string;
        secondaryControl: {
          imgAlt: string;
          information: string;
        };
      };
    };
  };
  back: {
    card: {
      title: string;
      listItems: string[];
      control: {
        imgAlt: string;
      };
    };
  };
};

export type Menu = Record<string, MenuItem[] | SpecialMenu[]>;

export type Reservation = {
  id: string;
  icon: string;
  alt: string;
  text: string;
  dropIcon: string;
};

export type listHomeIcons = {
  alt: string;
  src: string;
};

export type IconsList = listHomeIcons & {
  path: string;
};
