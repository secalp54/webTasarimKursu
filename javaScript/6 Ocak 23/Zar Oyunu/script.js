//zar 1
var zar1 = Math.random() * 6;
zar1 = Math.floor(zar1) + 1;
console.log(zar1);
//zar 2
var zar2 = Math.random() * 6;
zar2 = Math.floor(zar2) + 1;
console.log(zar2);

var onHarfler = "./images/dice";
var sonEk = ".png";
//img için resimlerin adlarını yazdırıyoruz.
var zar1Resim = onHarfler + zar1 + sonEk;
var zar2Resim = onHarfler + zar2 + sonEk;
//img1 isimli classın src sini değiştiriyoruz.
document.querySelector(".img1").setAttribute('src', zar1Resim);
//img2 isimli classın src sini değiştiriyoruz.
document.querySelector(".img2").setAttribute('src', zar2Resim);

var kazanan = "";
//kazananın tespiti
if (zar1 > zar2) {
    kazanan = "Kazanan Oyuncu 1";
} else if (zar2 > zar1) {
    kazanan = "Kazanan Oyuncu 2";
} else kazanan = "Berabere";

//h1 etiketine kazananı yazdırıyoruz.
document.querySelector("h1").textContent=kazanan;