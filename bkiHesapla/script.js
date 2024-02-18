//butona tıklayınca 
$(".btn").click(function (){
 var kilo=$("#kilo").val();
 var boy=$("#boy").val();
 boy=boy.replace(',','.');
 
 console.log(kilo);
 console.log("boy:"+checkInp(boy)+"kilo:"+checkInp(kilo))
 //alert("boy:"+boy+" kilo:"+kilo);
 if (boy>3 || !checkInp(boy) || !checkInp(kilo) || kilo==="" || boy===""){
    $("#boy").addClass("hata");
    $("#kilo").addClass("hata");
 }else{
   $("#boy").removeClass("hata");
    var bki=kilo/(Math.pow(boy,2));
    $("#hesapla").fadeOut(200);
    setTimeout(() => {
       $("#sonuc").removeClass("d-none");
       $("#sonucText").text(bki);
    }, 210);
   
 }
 

 
});

function checkInp(deger)
{
    
    var regex=/^[0-9]/;
    if (deger.match(regex))
    {
        return true;
    }
    return false;
}

