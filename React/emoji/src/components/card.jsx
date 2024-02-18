import React from 'react'
import { Baslik2 } from './baslik'

export default function Card(props) {
    return (
        <div className='col-4'>
        <div className="card m-1">
            <div className="card-body">
                <div className='text-center m-2'>
                <img src={props.resim} alt="" />
                </div>
                <Baslik2 text={props.baslik}/>
                <p>{props.aciklama}</p>
            </div>
        </div>
        </div>
    )
}
