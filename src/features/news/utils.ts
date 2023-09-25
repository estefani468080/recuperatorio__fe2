import { INoticias } from "./fakeRest";
import { INoticiasNormalizadas } from "./types";

export const NewsNormalize = (news: INoticias): INoticiasNormalizadas => {
  const titulo = news.titulo
    .split(" ")
    .map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");

  return {
    id: news.id,
    titulo,
    descripcion: news.descripcion,
    fecha: `Hace ${elapsedMinutes(news)} minutos`,
    esPremium: news.esPremium,
    imagen: news.imagen,
    descripcionCorta: news.descripcion.substring(0, 100),
  };
};

export const elapsedMinutes = (news: INoticias): number => {
  const ahora = new Date();
  return Math.floor((ahora.getTime() - news.fecha.getTime()) / 60000);
};
