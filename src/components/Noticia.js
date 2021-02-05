import React from 'react';

const Noticia = ({noticia}) => {
    const { urlToImage, url, title, description, source, author } = noticia;

    const autor = (author) ?
        <div>
            <hr/>
            <small>By: {author}</small>
        </div>
    : null;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <div className="card-img-container">
                    <img src={urlToImage} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <small>Source: <strong>{source.name}</strong></small>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    
                    {autor}
                    <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            </div>
        </div>
    );
}
 
export default Noticia;