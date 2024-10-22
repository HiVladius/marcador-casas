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

  const [isPageLoaded, setisPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setisPageLoaded(true);
    };
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isPageLoaded) {
      const obtenerPuntajes = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/puntajes");
          if (!response.ok) {
            throw new Error("Error al obtener puntajes");
          }
          const data = await response.json();
          const puntajesObj = data.reduce((acc, curr) => {
            acc[curr.equipo] = curr.puntos;
            return acc;
          }, {});
          setPuntajes(puntajesObj);
        } catch (error) {
          console.error("Error al parsear la respuesta JSON", error);
        }
      };

      obtenerPuntajes();
    }
  }, [isPageLoaded]);

  const modificarPuntaje = async (equipo, puntos) => {
    try {
      const response = await fetch("http://localhost:3000/api/puntajes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ equipo, puntos: puntajes[equipo] + puntos }),
      });

      if (!response.ok) {
        throw new Error("Error al modificar puntaje");
      }

      const data = await response.json();
      setPuntajes((prevPuntajes) => ({
        ...prevPuntajes,
        [equipo]: data.puntos,
      }));
    } catch (error) {
      console.error("Error al modificar puntaje", error);
    }
  };


  const sumarPuntos = (equipo) => {
    modificarPuntaje(equipo, 5);
  };

  const disminuirPuntos = (equipo) => {
    modificarPuntaje(equipo, -5);
  };

  const imagenesCasas = {
    Frontifinder: "/frontinfinder.jpg",
    Backensliterin: "/backenslytherin.jpg",
    Quafelpop: "/qafflepuff.jpg",
    Movilvenclaw: "/movilvenclaw.jpg",
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
            <img
              src={imagenesCasas[equipo]}
              alt={equipo}
              style={{ width: "200px", height: "auto" }}
            />
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
