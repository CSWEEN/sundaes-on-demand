import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

it("should update the scoop subtotal when scoops schange", async () => {
    render(<Options optionType="scoops"/>;

    const scoopSubtotal = screen.getByText("Scoops total: £", {exact: false});
    expect(scoopSubtotal).toHaveTextContent("0.00");

    // 1 vanilla scoop and check subtotal
    const vanillaInput = await screen.findByRole("spinbutton", { name: "Vanilla" });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(scoopSubtotal).toHaveTextContent("2.00");

    // 2 chocolate scoops and check subtotal
    const chocolateInput = await screen.findByRole("spinbutton", { name: "Chocolate" });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");
    expect(scoopSubtotal).toHaveTextContent("6.00");
});
