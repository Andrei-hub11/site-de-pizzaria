import DrinksMenu, {
  Feature,
  IconsList,
  SpecialMenu,
  MenuItem,
  Reservation,
  listHomeIcons,
} from "../types";

import PizzaIcon from "../assets/icons/la_pizza-slice.svg";
import DeliveryIcon from "../assets/icons/carbon_delivery-parcel.svg";
import OrderIcon from "../assets/icons/streamline_food-kitchenware-chef-toque-hat-cook-gear-chef-cooking-nutrition-tools-clothes-hat-clothing-food.svg";

import CalabresaImage from "../assets/images/pizza_calabresa.webp";
import MilhoImage from "../assets/images/pizza_milho.webp";
import FrangoImage from "../assets/images/pizza_frango.webp";
import QueijoImage from "../assets/images/pizza_queijo.webp";
import AtumImage from "../assets/images/pizza_atum.webp";
import HavaianaImage from "../assets/images/pizza_havaiana.webp";

import PeopleIcon from "../assets/icons/icon-park-solid_people.svg";
import DropIcon from "../assets/icons/formkit_down.svg";
import CalendarIcon from "../assets/icons/clarity_calendar-solid.svg";
import ClockIcon from "../assets/icons/bi_clock-fill.svg";

import InstagramIcon from "../assets/icons/ri_instagram-fill.svg";
import WhatsAppIcon from "../assets/icons/uil_whatsapp-alt.svg";
import FacebookIcon from "../assets/icons/uil_facebook.svg";

import PumpkinPieImage from "../assets/images/sliced-pumpkin-pie.webp";
import SliceSachertorteCake from "../assets/images/fatia-de-bolo-sacher-com-geleia-de-damasco.webp";
import RaspberryDrink from "../assets/images/bebida de framboesa.webp";

import HomeIcon from "../assets/icons/ic_round-home.svg";
import FeaturesIcon from "../assets/icons/eos-icons_service-instance.svg";
import FoodIcon from "../assets/icons/fluent_food-24-filled.svg";
import ReserveIcon from "../assets/icons/tabler_clock-filled1.svg";
import BookIcon from "../assets/icons/tabler_book-filled.svg";
import CarIcon from "../assets/icons/material-symbols_shopping-cart-sharp.svg";

export const homeIcons: listHomeIcons[] = [
  {
    alt: "ícone do instagram",
    src: InstagramIcon,
  },
  {
    alt: "ícone do whatsapp",
    src: WhatsAppIcon,
  },
  {
    alt: "ícone do facebook",
    src: FacebookIcon,
  },
];

export const navIcons: IconsList[] = [
  {
    alt: "ícone do home",
    src: HomeIcon,
    path: "home",
  },
  {
    alt: "ícone do serviços",
    src: FeaturesIcon,
    path: "features",
  },
  {
    alt: "ícone do cardapio",
    src: FoodIcon,
    path: "menu",
  },
  {
    alt: "ícone do fazer reserva",
    src: ReserveIcon,
    path: "reserve",
  },
  {
    alt: "ícone do sobre",
    src: BookIcon,
    path: "about",
  },
  {
    alt: "ícone do carrinho de compras",
    src: CarIcon,
    path: "car",
  },
];

export const featuresData: Feature[] = [
  {
    icon: PizzaIcon,
    title: "Pizza de qualidade",
    information: "A pizza aqui é de qualidade atestada, a melhor da região",
  },
  {
    icon: DeliveryIcon,
    title: "Entrega rápida",
    information:
      "Do momento em que avisarmos que sua pizza ficou pronta, não demorará até chegar a você",
  },
  {
    icon: OrderIcon,
    title: "Fazer pedido é fácil",
    information:
      "Selecione sua pizza no cardápio, clique no ícone do carrinho na parte superior da página, finalize e envie-nos seu pedido",
  },
];

export const reservations: Reservation[] = [
  {
    id: "1",
    icon: PeopleIcon,
    alt: "ícone de pessoa",
    text: "Selecionar",
    dropIcon: DropIcon,
  },
  {
    id: "2",
    icon: CalendarIcon,
    alt: "ícone de calendario",
    text: "01/01/2024",
    dropIcon: DropIcon,
  },
  {
    id: "3",
    icon: ClockIcon,
    alt: "ícone de relógio",
    text: "12:00 PM",
    dropIcon: DropIcon,
  },
];

export const specialOptions: SpecialMenu[] = [
  {
    id: "b7f142ae-78b9-4f1d-a63b-0e5d6f61a820",
    imgSrc: PumpkinPieImage,
    imgAlt: "imagem da torta de aboborá",
    title: "Torta de Aboborá",
    information:
      "Um deleite reconfortante que une a doçura suave da abóbora com especiarias acolhedoras.",
    type: "special",
    price: 8.0,
    control: {
      price: "R$ 8.00",
    },
  },
  {
    id: "b7f142ae-78b9-4f1d-a63b-0e5d6f61a829",
    imgSrc: SliceSachertorteCake,
    imgAlt: "imagem de fatia de bolo Sachertorte",
    title: "Fatia de Bolo Sachertorte",
    information:
      "Com camadas densas de bolo de chocolate, é recheado com geleia e coberto por uma fina camada de chocolate amargo. ",
    type: "special",
    price: 10.0,
    control: {
      price: "R$ 10.00",
    },
  },
];

export const drinkOptions: DrinksMenu[] = [
  {
    id: "98a52b7d-6f2e-4e6b-bc0c-7a4f1c9d81a2",
    imgSrc: RaspberryDrink,
    imgAlt: "imagem da bebida de framboesa",
    title: "Refrigerante Framboesa",
    information:
      "uma refrescante mistura que combina o sabor vibrante e doce das framboesas com o efervescente e refrescante",
    type: "drinks",
    price: 10.0,
    control: {
      price: "R$ 10.00",
    },
  },
];

export const menuOptions: MenuItem[] = [
  {
    front: {
      id: "7f7d75a1-9c6c-4e13-bbc1-3e02481a2a09",
      item: {
        imgSrc: CalabresaImage,
        imgAlt: "imagem da pizza de calabresa",
        title: "Pizza de Calabresa",
        information:
          "Deliciosa Pizza de Calabresa: Sabor autêntico, massa crocante e ingredientes frescos. Peça agora!",
        type: "pizza",
        control: {
          price: "R$ 32.00",
          secondaryControl: {
            imgAlt: "ícone de rotação",
            information: "Ver ingredientes",
          },
        },
      },
    },
    back: {
      card: {
        title: "Pizza de Calabresa",
        listItems: ["Calabresa Fatiada", "Molho de Tomate", "Queijo Mussarela"],
        control: {
          imgAlt: "ícone de rotação",
        },
      },
    },
  },
  {
    front: {
      id: "a3c9b2f7-82a1-4f5d-ae36-9cf9e887c3b8",
      item: {
        imgSrc: MilhoImage,
        imgAlt: "imagem da pizza de milho",
        title: "Pizza de Milho",
        information:
          "Pizza de Milho com Presunto: Um equilíbrio perfeito de doçura do milho e o sabor defumado do presunto fatiado.",
        type: "pizza",
        control: {
          price: "R$ 32.00",
          secondaryControl: {
            imgAlt: "ícone de rotação",
            information: "Ver ingredientes",
          },
        },
      },
    },
    back: {
      card: {
        title: "Pizza de Milho",
        listItems: ["Milho Verde", "Molho de Tomate", "Queijo Mussarela"],
        control: {
          imgAlt: "ícone de rotação",
        },
      },
    },
  },
  {
    front: {
      id: "e64d9a86-4b06-4898-bfd6-d6c9f89f2f1e",
      item: {
        imgSrc: FrangoImage,
        imgAlt: "imagem da pizza de frango",
        title: "Pizza de Frango",
        information:
          "Pizza de Frango: Ternos pedaços de frango e temperos deliciosos em cada fatia. Uma escolha irresistível!",
        type: "pizza",
        control: {
          price: "R$ 32.00",
          secondaryControl: {
            imgAlt: "ícone de rotação",
            information: "Ver ingredientes",
          },
        },
      },
    },
    back: {
      card: {
        title: "Pizza de Frango",
        listItems: [
          "Orégano",
          "Molho de Tomate",
          "Queijo Mussarela",
          "Frango Desfiado",
          "Cebola Fatiada",
        ],
        control: {
          imgAlt: "ícone de rotação",
        },
      },
    },
  },
  {
    front: {
      id: "2f4e589d-7c9a-498b-ae8a-ef9d3e07a609",
      item: {
        imgSrc: QueijoImage,
        imgAlt: "imagem da pizza de queijo",
        title: "Pizza de Queijo",
        information:
          "Clássica Pizza de Queijo: Uma indulgência de queijo derretido sobre uma massa crocante.",
        type: "pizza",
        control: {
          price: "R$ 32.00",
          secondaryControl: {
            imgAlt: "ícone de rotação",
            information: "Ver ingredientes",
          },
        },
      },
    },
    back: {
      card: {
        title: "Pizza de Queijo",
        listItems: [
          "Orégano",
          "Molho de Tomate",
          "Queijo Mussarela",
          "Cebola Fatiada",
        ],
        control: {
          imgAlt: "ícone de rotação",
        },
      },
    },
  },
  {
    front: {
      id: "8d7302ef-ee65-4a35-aa1b-87c1cf07f18c",
      item: {
        imgSrc: AtumImage,
        imgAlt: "imagem da pizza de atum",
        title: "Pizza de Queijo",
        type: "pizza",
        information:
          "Pizza de Atum: Atum suculento, queijo derretido e um toque especial de sabor do mar. Uma escolha deliciosa!",
        control: {
          price: "R$ 32.00",
          secondaryControl: {
            imgAlt: "ícone de rotação",
            information: "Ver ingredientes",
          },
        },
      },
    },
    back: {
      card: {
        title: "Pizza de Atum",
        listItems: [
          "Orégano",
          "Molho de Tomate",
          "Queijo Mussarela",
          "Atum",
          "Cebola Fatiada",
        ],
        control: {
          imgAlt: "ícone de rotação",
        },
      },
    },
  },
  {
    front: {
      id: "b7c134a9-f1b4-4376-b9f8-23c2d8f54e82",
      item: {
        imgSrc: HavaianaImage,
        imgAlt: "imagem da pizza havaiana",
        title: "Pizza Havaiana",
        type: "pizza",
        information:
          "Pizza Havaiana: O equilíbrio perfeito entre o doce abacaxi e o salgado presunto, em uma base de massa perfeitamente assada.",
        control: {
          price: "R$ 32.00",
          secondaryControl: {
            imgAlt: "ícone de rotação",
            information: "Ver ingredientes",
          },
        },
      },
    },
    back: {
      card: {
        title: "Pizza Havaiana",
        listItems: [
          "Orégano",
          "Molho de Tomate",
          "Queijo Mussarela",
          "Presunto",
          "Abacaxi Fatiado",
        ],
        control: {
          imgAlt: "ícone de rotação",
        },
      },
    },
  },
];
