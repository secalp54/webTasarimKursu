$("button").click(function (e) { 
  
  var btnText=  $(this).text();
  if (btnText==="btn1"){
    $("h1").css("font-size", "5rem");
  }
    
});

$(document).keydown(function (e) { 
    console.log(e.key);
});

$("button").on("click", function () {
    
});
$("#btn1").click(function (e) { 
    
    $("div").toggle(100);
    
});
$("#btn2").click(function (e) { 
    
    $("div").fadeIn(2000).fadeOut(100);
    
});