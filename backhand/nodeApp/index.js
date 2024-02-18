const fs =require("fs");
var generateName = require('sillyname');

var rasgeleAd = generateName();

fs.writeFile("mesaj.txt",rasgeleAd,(hata)=>{

if (hata) throw hata;
console.log("Dosya oluşturuldu!");
});
