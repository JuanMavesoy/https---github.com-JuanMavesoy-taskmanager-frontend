// src/hooks/useFiltro.js
import { useState } from 'react';

const useFiltro = (lista, campo1, campo2) => {
  const [filtro, setFiltro] = useState('');

  const listaFiltrada = lista.filter((item) =>
    item[campo1].toLowerCase().includes(filtro.toLowerCase()) ||
    item[campo2].toLowerCase().includes(filtro.toLowerCase())
  );

  return { filtro, setFiltro, listaFiltrada };
};

export default useFiltro;
