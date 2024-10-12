import { Box } from "@mui/material";
import React from "react";

// import frontifinder from '../../public/frontifinder.jpg';
// import backensliterin from '../../public/backensliterin.jpg';
// import qafflepuff from '../../public/qafflepuff.jpg';
// import movilvenclaw from '../../public/movilvenclaw.jpg';

import frontifinder from '../assets/frontifinder.jpg';
import backensliterin from '../assets/backensliterin.jpg';
import qafflepuff from '../assets/qafflepuff.jpg';
import movilvenclaw from '../assets/movilvenclaw.jpg';


const casas = [
  {
    nombre: "Frontifinder",
    escudo: frontifinder,
  },
  {
    nombre: "Backensliterin",
    escudo: backensliterin,
  },
  {
    nombre: "Quafelpop",
    escudo: qafflepuff,
  },
  {
    nombre: "Movilvenclaw",
    escudo: movilvenclaw,
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
