;(function(globals){
// Your code BELOW here...




  // Because the game board only corresponds to the `tbody` element...
  var $chessboard = jQuery('.chessboard tbody');
  // I always start variable names with `$` when they reference `jQuery.Collection` values

  // This looks strangely familiar... is that COPY-PASTA!?
  // TODO: Don't use COPY-PASTA!
  var gameboard = game.board();

  // You could also use nested `for` loops, but this is better...
  jQuery(gameboard).each(function(rank, row){
    jQuery(row).each(function(file, piece){
      // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
      var $square = $chessboard
        .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
        .find('td').eq(file) // Get the `td` inside the `tr` for the `file`

      console.log($square.get(), rank, file, piece);
      // Use the log, Luke!


//This is where we remove all the board for the computer except for the pieces and thier location.
      // if (piece) $square.text(piece); // Not _exactly_ what we discussed in class...
      if (piece === null) {
        console.log("YUPPERS!");
      } else {
        console.log(typeof piece);
      };
        // TODO: Convert `square` to class name(s)
        // TODO: Add class name(s) to `td` instead




    }); //jQuery(row).each...
  }); //jQuery(gameboard).each...


})(window || module && module.exports || this);
