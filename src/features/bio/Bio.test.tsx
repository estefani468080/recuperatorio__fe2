/** @jest-environment jsdom */
import Bio from "./Bio";
import { render } from "../../test-utils";
import "whatwg-fetch";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Darle click al boton de bart", () => {
  test("deberia aparecer la descripcion de bart", async () => {
    render(<Bio />);
    expect(
      await screen.findByText(
        "A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad."
      )
    ).toBeVisible();
  });
});
