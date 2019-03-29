let image = ["Slotmachine-Screenshot.png","ImageCarousel-screenshoot.png","Levelground-screenshoot.png", "Foodist-Screenshot.png"];
let counter = 0;
$(document).ready(function(){
  $('#next').on('click', function(){
    counter += 1
    if (counter == image.length){
      counter = 0;
    }
    $('#carousel').attr("src", image[counter])
  });
  $('#back').on('click', function(){
    counter -= 1
    if (counter == -1){
      counter = image.length - 1;

    }

    $('#carousel').attr("src", image[counter])
  });
});
