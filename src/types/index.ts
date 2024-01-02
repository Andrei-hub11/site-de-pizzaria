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
  $isUnique?: boolean;
};

export type Variants = {
  [key: string]: () => React.ReactNode;
};

export type MenuItem = {
  front: {
    id: string;
    item: {
      imgSrc: string;
      imgAlt: string;
      title: string;
      information: string;
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
