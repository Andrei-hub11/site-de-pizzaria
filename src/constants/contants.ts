import { Feature } from "../types";

import PizzaIcon from "../assets/icons/la_pizza-slice.svg";
import DeliveryIcon from "../assets/icons/carbon_delivery-parcel.svg";
import OrderIcon from "../assets/icons/streamline_food-kitchenware-chef-toque-hat-cook-gear-chef-cooking-nutrition-tools-clothes-hat-clothing-food.svg";

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
