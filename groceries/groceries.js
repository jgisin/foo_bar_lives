$( document ).ready(function(){
  var text = $('.itemText').val();
  var counter = 0;

  $('.itemText').on('keyup', function(){
    text = $('.itemText').val();
  });


  $('.addItem').on('click', function(){
    if(text !== ""){
      $('.shoppingList').append('<li class="listItem' + counter + '"></li>');
      $('.listItem' + counter ).after('<button class="itemDelete">Delete</button>');
      $('.listItem' + counter ).text(text);
      flashCreate();
      counter++;
      $('.no').remove();
    }else{
      flashError();
    }
  });

  $('.shoppingList').on('click', 'button', function(){
    $( this ).prev().remove();
    $( this ).remove();
  });

  var flashError = function(){
    $('body').append('<div class="error">Please Input Value</div>');
  };

  var flashCreate = function(){
    $('body').append('<div class="create">Item Created</div>');
  };

});
