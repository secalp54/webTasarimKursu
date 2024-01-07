// var ogrenciAdi="Ahmet"
// var ogrenciNo="456"
// var vize=50;
// var final=60;

//key value şeklinde değer tututulabilir
var ogrenci={
    adi:"Ahmet",
    no:456,
    vize:56,
    final:85
};

//Const
function Ogrenci(adi,no,vize,final){
    this.adi=adi;
    this.no=no;
    this.vize=vize;
    this.final=final;
    this.ortalama=function(){
        return (vize+final)/2;
    };
    this.buKim=()=>`${adi} isimli ogrencinin no:${no}`;
    
}

var ogrenci1=new Ogrenci("Ali",56,58,78);
console.log(ogrenci1.adi);
console.log(ogrenci1.buKim());

