import { render, fireEvent } from "../../test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cita from "./Cita";

describe("Tests del Componente Citas", () => {
  describe("Test para el render", () => {
    test("Render del componente", async () => {
      render(<Cita />);
      expect(
        screen.getByPlaceholderText("Ingresa el nombre del autor")
      ).toBeVisible();
      expect(screen.getByLabelText("Obtener cita aleatoria")).toBeEnabled();
      expect(screen.getByLabelText("Borrar")).toBeEnabled();
    });
  });

  describe("Test para la citar random", () => {
    test("Solo para oprimir el boton (Esto va a dar error)", async () => {
      await userEvent.click(screen.getByLabelText("Obtener cita aleatoria"));
    });
    test("No deberia mostrar el texto, si se solicitó una cita random", async () => {
      expect(
        screen.queryByText("No se encontro ninguna cita")
      ).not.toBeInTheDocument();
    });
  });

  describe("Solicitar cita por nombre del caracter", () => {
    test("Tipar el nombre del personaje", async () => {
      render(<Cita />);
      const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
      const pTexto = await screen.findByTestId("texto-cita");
      userEvent.clear(input);
      fireEvent.change(input, { target: { value: "Duffman" } });
      expect(input).toHaveDisplayValue("Duffman");
      await userEvent.click(screen.getByLabelText("Obtener Cita"));
      expect(pTexto.textContent).toBe("CARGANDO...");
    });
  });
});
