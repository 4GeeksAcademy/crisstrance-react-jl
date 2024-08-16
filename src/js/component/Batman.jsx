import React from "react";
import imagen from "../../img/batman.jpg"

export const Batman = () => {
    const info = {
        name: 'Batman',
        bio: 'Batman es un vigilante oscuro que protege Gotham City usando su intelecto, habilidades de combate y tecnología avanzada. Sin superpoderes, enfrenta criminales y dilemas morales, siempre luchando por la justicia mientras lidia con sus propios demonios internos. Su presencia en Gotham es tanto un símbolo de esperanza como de temor para aquellos que amenazan la ciudad.',
        url: 'https://es.wikipedia.org/wiki/Batman',
        textUrl: 'Read more...'
    }
    return (
    
        <div className="card m-1" style={{width: '24rem', transition: 'transform 0.3s ease-in-out' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={imagen} className="card-img-top" alt="..." style={{ width: '100%', height: '400px', objectFit: 'cover'}} />
                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <p className="card-text text-start">{info.bio}</p>
                    <a href={info.url} className="btn btn-primary">{info.textUrl}</a>
                </div>
        </div>

    );
};
