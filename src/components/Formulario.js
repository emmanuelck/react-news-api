import React from 'react';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    const buscarNoticias = e =>{
        e.preventDefault();

        guardarCategoria(categoria)
    }

    return (
        <div className="container buscador">
            <form 
                onSubmit={buscarNoticias}
                className="row row-cols-lg-auto g-3 align-items-center"
            >
                <div className="col-12">
                    <span>Buscador de noticias</span>
                </div>
                <div className="col-12">
                    <SelectNoticias />
                </div>
                <div className="col-12">
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Buscar"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default Formulario;