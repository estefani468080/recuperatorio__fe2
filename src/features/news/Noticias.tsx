import { useEffect, useState } from "react";
import {
  ContenedorModal,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "./styled";
import { obtenerNoticias } from "./fakeRest";
import { INoticiasNormalizadas } from "./types";
import CardModal from "./modal/CardModal";
import { NewsNormalize } from "./utils";
import Card from "./card/Card";
import { SuscribeImage } from "../../assets";

const TITLE = "Suscríbete a nuestro Newsletter";
const DESCRIPTION =
  "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.";
const ALT_IMAGE = "mr-burns-excelent";

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await obtenerNoticias();
        const data = response?.map((n) => NewsNormalize(n));
        setNoticias(data);
      } catch (error) {
        setError(JSON.stringify(error));
      }
    };
    getInfo();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      {error && <p>{error}</p>}
      <ListaNoticias>
        {noticias.map((n) => (
          <Card key={n.id} news={n} setModal={setModal} />
        ))}
        {modal && (
          <ContenedorModal>
            <CardModal
              esPremium={modal.esPremium}
              setModal={setModal}
              imageSrc={modal.esPremium ? SuscribeImage : modal.imagen}
              imageAlt={modal.esPremium ? ALT_IMAGE : "news-image"}
              titulo={modal.esPremium ? TITLE : modal.titulo}
              descripcion={modal.esPremium ? DESCRIPTION : modal.descripcion}
            />
          </ContenedorModal>
        )}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
