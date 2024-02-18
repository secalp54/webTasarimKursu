import React from 'react'
import Resim from './image'
export default function Card(elemanlar) {
    console.log(elemanlar)
    return (
        <div>
            <div className="card col-4 m-2" >
                <div className="card-body">
                    <div className='text-center'>
                      <Resim resim={elemanlar.resim} />
                    </div>
                    <div className='text-center'>
                        <p>{elemanlar.telefon}</p>
                        <p>{elemanlar.ad}</p>
                        <p>{elemanlar.mail}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
