$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#2ecc71');
});

$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#1abc9c');
  
$('loginform').submit();
  /*var password = $('#password').val();
  var email = $('#email').val();
  var jsonData = JSON.stringify({"password":$('#password').val(),"email":$('#email').val()});
  console.log(jsonData);
  $.ajax({
  type: "POST",
  url: 'login',
  contentType: 'application/json',
  data: jsonData,
  
  success: function( data, textStatus, jQxhr ){
       // $('#response pre').html( JSON.stringify( data ) );
  },
  error: function( jqXhr, textStatus, errorThrown ){
    console.log( errorThrown );
  },
  dataType: 'json'
});*/

});

$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
  $(this).toggleClass('green');
});



$(document).mouseup(function (e)
{
    var container = $(".login");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#loginform').removeClass('green');
    }
});