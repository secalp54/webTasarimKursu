import React from 'react'

export default function Card(props) {
    console.log(props.bilgi)
    return (
        
            <div className="card col-3 m-2" >
                <img src={props.bilgi.icon} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.bilgi.day}</h5>
                    <p className="card-text">
                    <h5>{props.bilgi.description}</h5>
                    <h3>{props.bilgi.degree} C</h3>
                    Gece:{props.bilgi.night}   Nem: {props.bilgi.humidity} %
                    </p>
                    
            </div>
            

        </div>
    )
}
