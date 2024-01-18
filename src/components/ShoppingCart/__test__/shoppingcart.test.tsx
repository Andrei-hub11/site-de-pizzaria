import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import ShoppingCart from "../ShoppingCart";

import userEvent from "@testing-library/user-event";
import Navbottom from "../../Navbottom/Navbottom";

describe("ShoppingCart component", () => {
  it("should render with the menu initially close", () => {
    render(<ShoppingCart />);

    // Verifica se o componente ShoppingCart foi renderizado
    const cartComponent = screen.getByTestId("car");
    expect(cartComponent).toBeInTheDocument();

    const cartContainer = screen.getByTestId("car");
    expect(cartContainer).toHaveClass("cart", { exact: true });

    // Verifica o estilo do componente quando o menu está aberto
    expect(cartContainer).toHaveStyle({
      transform: "translateY(-100%) translateZ(0)",
    });
  });

  it("should open when click in icon-cart", async () => {
    render(
      <>
        <ShoppingCart />
        <Navbottom />
      </>
    );

    // Simula um clique fora do componente para fechar o menu
    userEvent.click(document.body);

    const cartContainer = screen.getByTestId("car");
    const iconCart = screen.getByTestId("cart-icon");

    expect(cartContainer).toHaveClass("cart", { exact: true });

    userEvent.click(iconCart);

    await waitFor(() => {
      expect(cartContainer).toHaveStyle({
        transform: "translateY(0%) translateZ(0)",
      });
    });
  });
});
