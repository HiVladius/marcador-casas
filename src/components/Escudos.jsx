import { Box } from "@mui/material";
import React from "react";

const casas = [
  {
    nombre: "Frontifinder",
    escudo: "../assets/frontifinder.jpg",
  },
  {
    nombre: "Backensliterin",
    escudo: "../assets/backensliterin.jpg",
  },
  {
    nombre: "Quafelpop",
    escudo: "../assets/qafflepuff.jpg",
  },
  {
    nombre: "Movilvenclaw",
    escudo: "../assets/movilvenclaw.jpg",
  },
];

export const Escudos = () => {
  return (
    <Box>
      {casas.map((casa) => (
        <img 
        key={casa.nombre} 
        src={casa.escudo} 
        alt={casa.nombre} 
        />
      ))}
    </Box>
  );
};
// C:\Users\vladm\OneDrive\Escritorio\casas-puntaje\src\assets\backenslytherin.jpg
