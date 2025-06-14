import { useState } from 'react';

const usePaginacion = (datos, elementosPorPagina = 5) => {
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(datos.length / elementosPorPagina);

  const datosPaginados = datos.slice(
    (paginaActual - 1) * elementosPorPagina,
    paginaActual * elementosPorPagina
  );

  const irAPagina = (numero) => {
    if (numero >= 1 && numero <= totalPaginas) {
      setPaginaActual(numero);
    }
  };

  return {
    paginaActual,
    totalPaginas,
    datosPaginados,
    irAPagina,
    setPaginaActual
  };
};

export default usePaginacion;
