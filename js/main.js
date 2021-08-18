


var d = new Date();
document.getElementById("fecha").innerHTML = d;




function dame_numero_aleatorio(superior, inferior){
    var numPosibilidades = (superior + 1) - inferior;
    var aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    aleat = (inferior + aleat);
    return aleat
 }

function dame_color_aleatorio(){
    var color_aleat="#"
    hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
    var inferior = 0;
    var superior = hexadecimal.length-1;
    for (i=0;i<6;i++){
       color_aleat += hexadecimal[dame_numero_aleatorio(superior, inferior)];
    }
    return color_aleat
 }

 

 

  function cambiarcolor(){
    let  Changecolor = document.getElementById('Changecolor')

    Changecolor.style.backgroundColor = dame_color_aleatorio();
  }


 
 
  $(function () {
   $.scrollUp({
     scrollName: 'scrollUp', // Element ID
     topDistance: '100', // Distance from top before showing element (px)
     topSpeed: 300, // Speed back to top (ms)
     animation: 'fade', // Fade, slide, none
     animationInSpeed: 200, // Animation in speed (ms)
     animationOutSpeed: 200, // Animation out speed (ms)
     scrollText: 'Scroll to top', // Text for element
     activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
   });
 });