import { Feature, MenuItem } from "../types";

import PizzaIcon from "../assets/icons/la_pizza-slice.svg";
import DeliveryIcon from "../assets/icons/carbon_delivery-parcel.svg";
import OrderIcon from "../assets/icons/streamline_food-kitchenware-chef-toque-hat-cook-gear-chef-cooking-nutrition-tools-clothes-hat-clothing-food.svg";

import CalabresaImage from "../assets/images/pizza_calabresa.webp";
import MilhoImage from "../assets/images/pizza_milho.webp";
import FrangoImage from "../assets/images/pizza_frango.webp";
import QueijoImage from "../assets/images/pizza_queijo.webp";
import AtumImage from "../assets/images/pizza_atum.webp";
import HavaianaImage from "../assets/images/pizza_havaiana.webp";

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

export const menuOptions: MenuItem[] = [
  {
    front: {
      id: "pizza de calabresa",
      item: {
        imgSrc: CalabresaImage,
        imgAlt: "imagem da pizza de calabresa",
        title: "Pizza de Calabresa",
        information:
          "Deliciosa Pizza de Calabresa: Sabor autêntico, massa crocante e ingredientes frescos. Peça agora!",
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
        listItems: [
          "Calabresa Fatiada",
          "Molho de Tomate",
          "Queijo de Mussarela",
        ],
        control: {
          imgAlt: "ícone de rotação",
        },
      },
    },
  },
  {
    front: {
      id: "pizza de milho",
      item: {
        imgSrc: MilhoImage,
        imgAlt: "imagem da pizza de milho",
        title: "Pizza de Milho",
        information:
          "Pizza de Milho com Presunto: Um equilíbrio perfeito de doçura do milho e o sabor defumado do presunto fatiado.",
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
      id: "pizza de frango",
      item: {
        imgSrc: FrangoImage,
        imgAlt: "imagem da pizza de frango",
        title: "Pizza de Frango",
        information:
          "Pizza de Frango: Ternos pedaços de frango e temperos deliciosos em cada fatia. Uma escolha irresistível!",
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
      id: "pizza de queijo",
      item: {
        imgSrc: QueijoImage,
        imgAlt: "imagem da pizza de queijo",
        title: "Pizza de Queijo",
        information:
          "Clássica Pizza de Queijo: Uma indulgência de queijo derretido sobre uma massa crocante.",
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
      id: "pizza de atum",
      item: {
        imgSrc: AtumImage,
        imgAlt: "imagem da pizza de atum",
        title: "Pizza de Queijo",
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
      id: "pizza havaiana",
      item: {
        imgSrc: HavaianaImage,
        imgAlt: "imagem da pizza havaiana",
        title: "Pizza Havaiana",
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
