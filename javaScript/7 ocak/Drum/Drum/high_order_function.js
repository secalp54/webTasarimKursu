const topla=(sayi1,sayi2)=>sayi1+sayi2;
const cikar=(sayi1,sayi2)=>sayi1-sayi2;
const carp=(sayi1,sayi2)=>sayi1*sayi2;
const bol=(sayi1,sayi2)=>sayi1/sayi2;
const islem=(sayi1,sayi2,hesapla)=>hesapla(sayi1,sayi2);

console.log(islem(50,58,cikar));
console.log(islem(50,58,carp));
console.log(islem(50,58,bol));
console.log(islem(50,58,topla));