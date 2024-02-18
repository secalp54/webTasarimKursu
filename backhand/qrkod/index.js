// const fs=require("fs");
import fs from "fs";
import inquirer from "inquirer";
// var qr = require('qr-image');
import qr from "qr-image";


var adiniz;
var yasiniz;
inquirer.prompt([
    {"message":"İnternet Adresi Girin","name":"url"},
    

]).then((answers) => {
    //burası cevaplar girildikten sonra çalışır.
    console.log(answers.url);
    var qrpng = qr.image(answers.url);
    qrpng.pipe(fs.createWriteStream('qr-image.png'));
  });

  