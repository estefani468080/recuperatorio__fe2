import React from "react";
import * as styled from "../styled";
import * as cardStyles from "../card/Card.styles";
import * as cardModalStyles from "../modal/CardModal.styles";
import { INoticiasNormalizadas } from "../types";
import { SuscribeImage, CloseButton as Close } from "../../../assets";


type Props = { 
  esPremium: boolean,
  modal?:INoticiasNormalizadas | null,
  setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
}

const modalConstants = {
  title: "Suscríbete a nuestro Newsletter",
  description:"Suscríbete a nuestro newsletter y recibe news de nuestros personajes favoritos.",
};


export const Modal = ({esPremium, modal, setModal}: Props) => {
  
  function alertSuscription() {
    setTimeout(() => {
      alert("Suscripto!");
      setModal(null);
    }, 1000);}

  const imgSrc = esPremium?SuscribeImage:modal?.imagen;
  const imgAlt = esPremium?"news-image":"mr-burns-excelent";

  const titleModal = esPremium?modalConstants.title:modal?.titulo;
  const descriptionModal = esPremium?modalConstants.description:modal?.descripcion;


  return (

    <styled.ContenedorModal>
      <cardModalStyles.TarjetaModal>
        <styled.CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </styled.CloseButton>
        <cardModalStyles.ImagenModal 
          src={imgSrc} 
          alt={imgAlt} />
        <cardModalStyles.CotenedorTexto>
          <cardModalStyles.TituloModal>{titleModal}</cardModalStyles.TituloModal>
          <cardModalStyles.DescripcionModal>{descriptionModal}</cardModalStyles.DescripcionModal>
          {esPremium && 
        <cardStyles.BotonLectura
          onClick={() => alertSuscription()}>
          Suscríbete
        </cardStyles.BotonLectura>}
        </cardModalStyles.CotenedorTexto>
      </cardModalStyles.TarjetaModal>
    </styled.ContenedorModal>
  );
};
