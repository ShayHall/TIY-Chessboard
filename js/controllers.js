(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
    helper();

  // Controller for "next move"...
  jQuery(".fa-step-forward").on('click', function(event){
    game.next(); //Tell the Model -- `game` -- to advance to the next move...
    helper(); // Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery(".fa-step-backward").on('click', function(event){
    game.prev(); //Tell the Model -- `game` -- to advance to the previous move...
    helper(); //Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery(".fa-fast-forward").on('click', function(event){
    console.log("FAST FORWARD!");
    game.end(); //Tell the Model -- `game` -- to advance to the last move...
    helper(); //Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "re-start"...
  jQuery(".fa-backward").on('click', function(event){
    game.reset();// Tell the Model -- `game` -- to do something it knows how to do...
    helper(); //Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Controller for "watch game play automatically"...
  jQuery(".fa-play").on('click', function (event){
        console.log("Play!");
         // TODO: Tell the Model -- `game` -- to do something it knows how to do...

        helper(); // Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });


function helper () {
  var $chessboard = jQuery('.chessboard tbody');
  var gameboard = game.board();

  jQuery(gameboard).each(function(rank, row){
    jQuery(row).each(function(file, piece){
      var $square = $chessboard
        .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
        .find('td').eq(file) // Get the `td` inside the `tr` for the `file`
      if (piece) {
        $square.text(piece);
      } else {
        $square.text(" ");
      };
    $(function() {
      $('td:contains("p")').addClass('whitepawn');
      $('td:contains("P")').addClass('blackpawn');
      $('td:contains("r")').addClass('whiterook');
      $('td:contains("R")').addClass('blackrook');
      $('td:contains("n")').addClass('whiteknight');
      $('td:contains("N")').addClass('blackknight');
      $('td:contains("b")').addClass('whitebishop');
      $('td:contains("B")').addClass('blackbishop');
      $('td:contains("q")').addClass('whitequeen');
      $('td:contains("Q")').addClass('blackqueen');
      $('td:contains("k")').addClass('whiteking');
      $('td:contains("K")').addClass('blackking');
      $('td:contains(" ")').removeClass('whitepawn');
      $('td:contains(" ")').removeClass('whiterook');
      $('td:contains(" ")').removeClass('whiteknight');
      $('td:contains(" ")').removeClass('whitebishop');
      $('td:contains(" ")').removeClass('whitequeen');
      $('td:contains(" ")').removeClass('blackking');
      $('td:contains(" ")').removeClass('blackpawn');
      $('td:contains(" ")').removeClass('blackrook');
      $('td:contains(" ")').removeClass('blackknight');
      $('td:contains(" ")').removeClass('blackbishop');
      $('td:contains(" ")').removeClass('blackqueen');
      $('td:contains(" ")').removeClass('blackking');
    });
    }); //jQuery(row).each...
  }); //jQuery(gameboard).each...
};//helper()...


})(window || module && module.exports || this)
