import React from 'react';
import Noticia from './Noticia';

const ListadoNoticias = ({noticias}) => (
    <div className="container news-container">
        <div className="row">
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    </div>
);
 
export default ListadoNoticias;