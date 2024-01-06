//var baslik=document.firstElementChild.lastElementChild.firstElementChild;

//h1 elemanını seçer
// var baslik=document.querySelectorAll(".list");
// var ls=document.getElementsByClassName("list");

// for(let sayac=0;sayac<ls.length;sayac++){
//     ls[sayac].textContent=sayac+". eleman";
// }
// var baslik=document.querySelector("h1");
// document.querySelector("button").style.background="#7E2553";
// console.log(document.querySelector("button").innerHTML);
document.querySelector("h1").classList.toggle("gizle");
// document.querySelector("h1").classList.remove("gizle");

document.body.style.backgroundColor="#DCF2F1"

console.log(document.querySelector("li a").getAttribute("href"));

document.querySelector("li a").setAttribute('href','https://bing.com');
document.querySelector("li a").innerHTML="Bing";