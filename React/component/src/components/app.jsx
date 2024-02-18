import React from 'react'
import Baslik  from './baslik'
import Listem from './liste'
import * as f from "./test";

export default function app() {
    return (
        <div>
            <Baslik />
            <Listem />
            <div>{f.topla(1,3)}</div>
        </div>
    )
}
