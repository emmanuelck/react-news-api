import React, { Fragment, useState, useEffect } from 'react';
import './components/Styles.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=21fb50e8e36e44d1bfc09a8df3d8db8b`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);


  return(
    <Fragment>
      <Header
        titulo='THE REAL NEWS'
      />
      <div>
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
            noticias={noticias}
        />
        
      </div>
    </Fragment>
  );
  
}

export default App;
