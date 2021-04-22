
var images = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg" ]
var iter = 0;

function previous(){
  var pic = document.getElementById("pic");

  if(iter == 0){
    iter = images.length;
  }
  iter--;
  pic.src = images[iter];
}

function next(){
  var pic = document.getElementById("pic");

  if(iter == images.length-1){
    iter = 0;
  }
  else{
    iter++;
  }
  pic.src = images[iter];
}
