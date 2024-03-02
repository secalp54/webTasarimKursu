import React from 'react'
import Card from './Card'
import axios from 'axios'
import { useState } from 'react'
import ClockLoader from 'react-spinners/ClockLoader.js'


export default function App() {

    const [sehir, setSehir] = useState("ankara")
    const [havaDurumu, setHavaDurumu] = useState(null);
    const [goster,setGoster]=useState(false);

    function basarili(crd){
        console.log(crd.coords.latitude);
    }
    navigator.geolocation.getCurrentPosition(basarili,()=>{})


    const config = {
        headers: {
            "authorization": "apikey 5o8aJ6bTrn8GR5Ke36O18Y:6ZexX6OSIfS6lQT0GhY0xA",
            "content-type": "application/json"
        }

    }
    async function bilgileriGetir() {
        setGoster(true);
        const result = await axios.get('https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=' + sehir, config)

        setHavaDurumu(result.data);
        setGoster(false);


    }

    function handleChange(e) {
        const s = e.target.value;
        setSehir(s);
    }


    return (
        <div className='container'>
            <div className='d-flex mt-5'>
                <div className="input-group input-group-lg">
                    <input onChange={handleChange} type="text" placeholder='Şehir yazınız...' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
                <button type="button" onClick={bilgileriGetir} className="btn btn-primary btn-lg ms-2">Getir</button>
                {goster&&<ClockLoader
                    // color={color}
                    // loading={loading}
                    // cssOverride={override}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />}
            </div>
            <div className='row d-flex justify-content-around'>
                {havaDurumu === null ? "Bir şehir seçiniz" : (havaDurumu.result.map((eleman) => {
                    return <Card bilgi={eleman} />
                }))
                }


            </div>



        </div>
    )
}
