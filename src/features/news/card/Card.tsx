import { INoticiasNormalizadas } from "../types";
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  BotonLectura,
} from "./Card.styles";

const Card = ({
  news,
  setModal,
}: {
  news: INoticiasNormalizadas;
  setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
}) => {
  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={news.imagen} />
      <TituloTarjetaNoticia>{news.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{news.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {news.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura onClick={() => setModal(news)}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
};

export default Card;
