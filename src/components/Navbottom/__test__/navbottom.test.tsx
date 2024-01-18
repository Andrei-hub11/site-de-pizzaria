import { render, waitFor } from "@testing-library/react";

import { describe, expect, it, vi } from "vitest";
import Navbottom from "../Navbottom";
import userEvent from "@testing-library/user-event";

const toggleCartMenuMock = vi.fn();
vi.mock("../../../store/useMenuStore", () => ({
  __esModule: true,
  default: vi.fn(() => ({
    isOpen: false,
    toggleCartMenu: toggleCartMenuMock,
  })),
}));

vi.mock("../../../store/useCartStore", () => ({
  __esModule: true,
  default: vi.fn(() => ({
    products: [],
  })),
}));

describe("useNavbottom", () => {
  it("should call toggleCartMenu when icon is clicked", async () => {
    const { getByTestId } = render(<Navbottom />);

    const icon = getByTestId("cart-icon"); // Update with your actual test id

    userEvent.click(icon);

    await waitFor(() => {
      expect(toggleCartMenuMock).toHaveBeenCalledTimes(1);
    });
  });
});
