import React from "react";
import { INoticiasNormalizadas } from "../types";
import { Modal } from "./Modal";

type Props = {
    setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
    modal: INoticiasNormalizadas | null;
};

const RenderModal = ({modal,setModal}: Props) => {
  if(modal){
    if(modal.esPremium){
      return<Modal esPremium={true} setModal={setModal}></Modal>;
    }
    return <Modal esPremium={false} modal={modal} setModal={setModal}/>;
  }
  return null;
};

export default RenderModal;