//butona tıklayınca 
$(".btn").click(function (){
 var kilo=$("#kilo").val();
 var boy=$("#boy").val();
 boy=boy.replace(',','.');
 //alert("boy:"+boy+" kilo:"+kilo);
 if (boy>3){
    alert("Boyunuzu düzgün girin");
 }else{
    var bki=kilo/(Math.pow(boy,2));
    alert(bki);
 }
 

 
});

