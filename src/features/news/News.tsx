import React from "react";
import { useState } from "react";
import { INoticiasNormalizadas } from "./types";
import * as styled from "./styled";
import { RenderNews } from "./ComponentsNews/RenderNews";
import RenderModal from "./ComponentsNews/RenderModal";


export const News = () =>{
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
  return (
    <styled.ContenedorNoticias>
      <styled.TituloNoticias>Noticias de los Simpsons</styled.TituloNoticias>
      <styled.ListaNoticias>
        <RenderNews setModal={setModal}></RenderNews>
        <RenderModal setModal={setModal} modal={modal}/>
      </styled.ListaNoticias>
    </styled.ContenedorNoticias>
  );
};