export type Theme = {
  colors: {
    primary: string;
    text: string;
    background: string;
  };
  breakpoints: {
    smallerPhone: string;
    phoneOnly: string;
    tabletPortraitUp: string;
    tabletLandscapeUp: string;
    desktopUp: string;
    bigDesktopUp: string;
  };
};

export type Feature = {
  icon: string;
  title: string;
  information: string;
};

export type ButtonProps = {
  $primary: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void | undefined;
  $isUnique?: boolean;
};
