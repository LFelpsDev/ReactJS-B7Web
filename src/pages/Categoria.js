import React from 'react';
import { useLocation } from 'react-router-dom'

function useQuery(){
  return new URLSearchParams (useLocation().search);
}

export function Categoria(){
  let query = useQuery();

  let cat = query.get('tipo');

  let subtipo = query.get('subtipo')

  return (
    <>
      <h4>Conteudo Cateogriasasdaikcaijkcoakcoak</h4>
      Exbindo coisa {cat} - {subtipo}
    </>
  )
}