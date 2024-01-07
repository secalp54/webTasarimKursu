//tüm butonları buttonlar değişkeninde tutuyoruz.
var buttonlar = document.querySelectorAll(".drum");
console.log(buttonlar);
//button sayısını alıyoruz.
var butonSayisi = buttonlar.length;

//bütün butonlara eventlistener tanımlamak için döngü açıyoruz.
for (let sayac = 0; sayac < butonSayisi; sayac++) {

    buttonlar[sayac].addEventListener("click", function () {
        //tıklanılan harfi butonMetnine atadık.
        var butonMetni = buttonlar[sayac].innerHTML;
        var element=buttonlar[sayac];
        
        sesCal(butonMetni);
        animasyonGoster(element);
        
        
        
        



    });

    //klavyeden tuşa basınca
    
   

}

const sesler = {
    w: "./sounds/tom-1.mp3",
    a: "./sounds/tom-2.mp3",
    s: "./sounds/tom-3.mp3",
    d: "./sounds/tom-4.mp3",
    j: "./sounds/crash.mp3",
    k: "./sounds/kick-bass.mp3",
    l: "./sounds/snare.mp3",
};
function sesCal(harf) {
    var dosyaIsmi = "";
    switch (harf) {
        case 'w':
            dosyaIsmi = sesler.w
            break;
        case 'a':
            dosyaIsmi = sesler.a
            break;
        case 's':
            dosyaIsmi = sesler.s
            break;
        case 'd':
            dosyaIsmi = sesler.d
            break;
        case 'j':
            dosyaIsmi = sesler.j
            break;
        case 'k':
            dosyaIsmi = sesler.k
            break;
        case 'l':
            dosyaIsmi = sesler.l
            break;
        default:
            break;
    }
    var ses=new Audio(dosyaIsmi);
    ses.play();
}

function animasyonGoster(element){
    
   element.classList.add("pressed");

   //settimeout
   setTimeout(() => {
    element.classList.remove("pressed");
   }, 300);
        
}

document.addEventListener("keypress",function(olay){
   //sesçal fonksiyonuna basılan tuşu gönderiyoruz
   //basılan tuşlar e değişkeninde saklanır.
    sesCal(olay.key);
})