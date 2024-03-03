import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { arttir } from '../redux/countSlice';

export default function Button(prams) {
    const d=useDispatch();
    const sayi=useSelector((state)=>state.count.value);
    function add(e){
        d(arttir());
    }
  return (
    <div>
        <Button onClick={add}>Sayac: {sayi} </Button>
    </div>
  )
}
