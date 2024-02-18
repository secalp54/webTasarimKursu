import React from 'react'
import { Baslik1 } from './baslik'
import Card from './card'
import veriler from '../data/veri'
export default function App() {

    function veriOku(veri) {
        return (<Card resim={veri.resim} baslik={veri.baslik} aciklama={veri.aciklama} />);
    }



    return (
        <div className='container'>
            <Baslik1 text="Emoji Dünyası" />
            <div className='row'>

                {veriler.map(veriOku)}


                {veriler.map(function (veri) {
                    return (<Card resim={veri.resim} baslik={veri.baslik} aciklama={veri.aciklama} />);
                })}


            </div>

        </div>
    )
}
