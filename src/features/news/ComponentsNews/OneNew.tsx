import React from "react";
import * as styled from "../card/Card.styles";
import { INoticiasNormalizadas } from "../types";

type Props = {
    oneNew: INoticiasNormalizadas;
    setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
};

export const OneNew = ({ oneNew, setModal }: Props) => {
  return (
    <styled.TarjetaNoticia key={oneNew.titulo}>
      <styled.ImagenTarjetaNoticia src={oneNew.imagen} />
      <styled.TituloTarjetaNoticia>{oneNew.titulo}</styled.TituloTarjetaNoticia>
      <styled.FechaTarjetaNoticia>{oneNew.fecha}</styled.FechaTarjetaNoticia>
      <styled.DescripcionTarjetaNoticia>
        {oneNew.descripcionCorta}
      </styled.DescripcionTarjetaNoticia>
      <styled.BotonLectura onClick={() => setModal(oneNew)}>Ver más</styled.BotonLectura>
    </styled.TarjetaNoticia>
  );
};
