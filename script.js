var main = function(){

 $('.btn-post').click(function(){
     
     var post = $('.form_box').val();
     $('<li>').text(post).prependTo('.post_its');
     $('.form_box').val('');
      
 });
    $(document).on('click', 'li', function(){
      $(this).remove();
    })
}
$(document).ready(main);