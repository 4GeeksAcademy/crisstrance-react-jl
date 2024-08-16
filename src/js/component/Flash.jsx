import React from "react";
import imagen from "../../img/flash.jpg"

export const Flash = () => {
    const info = {
        name: 'Flash',
        bio: 'El último hijo de Krypton, Superman es un símbolo de esperanza y justicia. Con su fuerza sobrehumana, vuelo, y visión láser, protege la Tierra de amenazas tanto humanas como extraterrestres. A pesar de su poder, su mayor fortaleza es su humanidad y su inquebrantable moral.',
        url: 'https://es.wikipedia.org/wiki/Flash_(historieta)',
        textUrl: 'Read more...'
    }
    return (
    
        <div className="card m-1" style={{width: '24rem', transition: 'transform 0.3s ease-in-out' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={imagen} className="card-img-top" alt="..." style={{ width: '100%', height: '400px', objectFit: 'cover'}}/>
                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <p className="card-text text-start">{info.bio}</p>
                    <a href={info.url} className="btn btn-primary">{info.textUrl}</a>
                </div>
        </div>

    );
};
