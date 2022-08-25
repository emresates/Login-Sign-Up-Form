$(document).ready(function(){
    $('#goLeft').on('click', function(){
      $('.slideBox').animate({
        'marginLeft' : '0'
      });
      $('.layer').animate({
        'marginLeft' : '100%'
      });
      
    });
    $('#goRight').on('click', function(){
      $('.slideBox').animate({
        'marginLeft' : '50%'
      });
      $('.layer').animate({
        'marginLeft': '0'
      });
    });
  });
  

// HIDING POPUP
// Prevent the browser from showing default error bubble/ hint
document.addEventListener('invalid', (function(){
    return function(e){        
        e.preventDefault();
    };
})(), true);

