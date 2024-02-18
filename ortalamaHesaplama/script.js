var dersListesi=[];
$("button").on("click", function () {
    //tıklandığında burası çalışır
    var dersAdi=$("#dersAdi").val();
    var ortalama=$("#ortalama").val();
    var hds=$("#hds").val();
    var ders= new Ders(dersAdi,ortalama,hds);
    var toplamOrtalama=0;
    var toplamHds=0;
    dersListesi.push(ders);
    $("ul").empty();
    dersListesi.forEach(d => {
        toplamOrtalama+=(d.ortalama*d.hds);
        toplamHds+= parseInt(d.hds);
        console.log(toplamHds);
        console.log(toplamOrtalama);
        $("ul").append("<li class='list-group-item'>"+d.dersAdi+"</li>");
    });
    $("ul").append("<li class='list-group-item'><strong>Ortalamanız: "+(toplamOrtalama/toplamHds)+"</strong><button id='"+d.dersAdi+"'></button></li>");
});

function Ders(dersAdi,ortalama,hds){
this.dersAdi=dersAdi;
this.ortalama=ortalama;
this.hds=hds;
}

$("ul").on("click","button", function () {
    
});