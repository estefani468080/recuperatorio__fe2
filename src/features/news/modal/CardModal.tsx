import SubscriptionButton from "../Subscription/SubscriptionButton";
import { ICardModalProps } from "../types";
import {
  TarjetaModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  CotenedorTexto,
} from "./CardModal.styles";
import { CloseButtonStyles } from "../styled";
import { CloseButton as Close } from "../../../assets";

const CardModal = ({
  esPremium,
  setModal,
  imageSrc,
  imageAlt,
  titulo,
  descripcion,
}: ICardModalProps) => {
  return (
    <TarjetaModal>
      <CloseButtonStyles onClick={() => setModal(null)}>
        <img src={Close} alt="close-button" />
      </CloseButtonStyles>
      <ImagenModal src={imageSrc} alt={imageAlt} />
      <CotenedorTexto>
        <TituloModal>{titulo}</TituloModal>
        <DescripcionModal>{descripcion}</DescripcionModal>
        {esPremium && <SubscriptionButton setModal={setModal} />}
      </CotenedorTexto>
    </TarjetaModal>
  );
};

export default CardModal;
