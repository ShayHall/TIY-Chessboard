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
    game.next();//Tell the Model -- `game` -- to advance to the next move...
    helper();
      // $(from.rank,from.file).removeClass(selector);
      // $(to.rank, to.file).addClass(selector);
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery(".fa-step-backward").on('click', function(event){
    game.prev();//  Tell the Model -- `game` -- to advance to the previous move...
    helper();

    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery(".fa-fast-forward").on('click', function(event){
    console.log("FAST FORWARD!");
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "re-start"...
  jQuery(".fa-backward").on('click', function(event){
    game.reset();// Tell the Model -- `game` -- to do something it knows how to do...
    helper(); //Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for play...
  jQuery(".fa-play").on('click', function(event){
    console.log("PLAY IT AGAIN, SAM!");
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

function helper () {
  var $chessboard = jQuery('.chessboard tbody');
  // Start variable names with `$` when they reference `jQuery.Collection` values
  var gameboard = game.board();

  jQuery(gameboard).each(function(rank, row){
    jQuery(row).each(function(file, piece){
      var $square = $chessboard
        .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
        .find('td').eq(file) // Get the `td` inside the `tr` for the `file`

      // console.log($square.get(), rank, file, piece); // Use the log, Luke!

      if (piece) {
        // $square.text(content);
        $square.text(piece);
      } else {
        $square.text(" ");
      };

    }); //jQuery(row).each...
  }); //jQuery(gameboard).each...
};//helper()...

})(window || module && module.exports || this)
