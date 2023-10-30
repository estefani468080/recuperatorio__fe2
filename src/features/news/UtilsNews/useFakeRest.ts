import { INoticiasNormalizadas, INoticias } from "../types";
import { data } from "./DataNews";
import { useEffect, useState } from "react";
import { wordCapitalizer } from "../../../utils/wordCapitalizer";
import { simulateElapsedMinutes } from "../../../utils/timeSimulator";

export const getNews: () => Promise<INoticias[]> = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const useFakeRest: () => INoticiasNormalizadas[] = () =>{
  const [news, setNews] = useState<INoticiasNormalizadas[]>([]);

  useEffect(() => {
    const getInformation = async () => {
      const response = await getNews();
      const data = response.map((n) => {
        const title = wordCapitalizer(n.titulo);       
        return {
          id: n.id,
          titulo: title,
          descripcion: n.descripcion,
          fecha: `Hace ${simulateElapsedMinutes(n.fecha)} minutos`,
          esPremium: n.esPremium,
          imagen: n.imagen,
          descripcionCorta: n.descripcion.substring(0, 100),
        };
      });
      setNews(data);
    };
  
    getInformation();
  }, []);
  return news;
};
