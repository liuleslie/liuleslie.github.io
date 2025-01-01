$(document).ready(function() {
     // this will disable dragging of all images
     $("img").mousedown(function(e){
          e.preventDefault()
     }); 

     // this will disable right-click on all images
     $("img").on("contextmenu",function(e){
          return false;
     });

     
});