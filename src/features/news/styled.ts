import styled from "styled-components";

export const ContenedorNoticias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

export const TituloNoticias = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 2rem 0;
  padding: 0;
  color: #fdd835;
  text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
    -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
    -2px 0px 0 #000000, 0px -2px 0 #000000;
  letter-spacing: 0.1rem;
`;

export const ListaNoticias = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 0;
`;

export const ContenedorModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseButtonStyles = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  & img {
    max-width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;
