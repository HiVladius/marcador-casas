import { useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";




const Marcador = () => {
  const [puntajes, setPuntajes] = useState({
    Frontifinder: 0,
    Backensliterin: 0,
    Quafelpop: 0,
    Movilvenclaw: 0,
  });

  const modificarPuntaje = (equipo, puntos) => {
    setPuntajes((prevPuntajes) => ({
      ...prevPuntajes,
      [equipo]: Math.max(prevPuntajes[equipo] + puntos, 0),
    }));
  };

  useEffect(() => {
    const savedPuntajes = localStorage.getItem("puntajes");
    if (savedPuntajes) {
      setPuntajes(JSON.parse(savedPuntajes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("puntajes", JSON.stringify(puntajes));
  }, [puntajes]);

  const sumarPuntos = (equipo) => {
    modificarPuntaje(equipo, 10);
  };

  const disminuirPuntos = (equipo) => {
    modificarPuntaje(equipo, -10);
  };

  const imagenesCasas = {
    Frontifinder: "../src/assets/frontinfinder.jpg",
    Backensliterin: "../src/assets/backenslytherin.jpg",
    Quafelpop: "../src/assets/qafflepuff.jpg",
    Movilvenclaw: "../src/assets/movilvenclaw.jpg",
  };

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gap={2} 
        alignItems="center"
        mt={10}
      >
        {Object.keys(puntajes).map((equipo) => (
          <Box
            key={equipo}
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={6}
          >
            <img src={imagenesCasas[equipo]} alt={equipo} style={{ width: '200px', height: 'auto' }} />
            <Typography>{equipo}</Typography>
            <Typography variant="h2">{puntajes[equipo]}</Typography>
            <Box mt={6}>
              <Button
                startIcon={<AddCircle />}
                onClick={() => sumarPuntos(equipo)}
              >
                Sumar
              </Button>
              <Button
                startIcon={<RemoveCircle />}
                onClick={() => disminuirPuntos(equipo)}
              >
                Restar
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Marcador;
