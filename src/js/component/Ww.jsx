import React from "react";
import imagen from "../../img/ww.jpg"

export const Ww = () => {
    const info = {
        name: 'Wonder Woman',
        bio: 'Una guerrera amazona, Wonder Woman es la encarnación del poder, la sabiduría y la compasión. Armada con su lazo de la verdad y brazaletes indestructibles, lucha por la paz y la igualdad, enfrentándose a dioses y villanos con la misma determinación.',
        url: 'https://es.wikipedia.org/wiki/Mujer_Maravilla',
        textUrl: 'Read more...'
    }
    return (

        <div className="card m-1" style={{ width: '24rem', transition: 'transform 0.3s ease-in-out' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={imagen} className="card-img-top" alt="..." style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
                <p className="card-text text-start">{info.bio}</p>
                <a href={info.url} className="btn btn-primary">{info.textUrl}</a>
            </div>
        </div>

    );
};
