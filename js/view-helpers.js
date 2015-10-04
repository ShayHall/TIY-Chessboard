;(function(globals){
  // Because the game board only corresponds to the `tbody` element...
function helper (){
  var $chessboard = jQuery('.chessboard tbody');
  // Start variable names with `$` when they reference `jQuery.Collection` values
  var gameboard = game.board();

  jQuery(gameboard).each(function(rank, row){
    jQuery(row).each(function(file, piece){
      var $square = $chessboard
        .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
        .find('td').eq(file) // Get the `td` inside the `tr` for the `file`

      console.log($square.get(), rank, file, piece); // Use the log, Luke!
      // if (piece) $square.text(piece); // Not _exactly_ what we discussed in class...
      if (piece === 'p') {
        $square.text(piece);      }
      // if (piece) {
      //   $square.text(piece); //This puts the pieces on the board!!!
        // console.log($square.text(piece));
        // console.log($square);
      //   console.log($square[0]);
      //   console.log($square[0].className);
      //   console.log($square[0].localName);
        // console.log($square[0].append($square[0].className));
        // TODO: Convert `square` to class name(s)
        // TODO: Add class name(s) to `td` instead
      // }; //if(piece)...

    }); //jQuery(row).each...
  }); //jQuery(gameboard).each...
};
// http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
})(window || module && module.exports || this);
