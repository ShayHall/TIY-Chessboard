(function(globals){ // IIFE: Immediately Invoked Function Expression
})(window || module && module.exports || this);

(function(globals){ // IIFE: Immediately Invoked Function Expression
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  var moves = [
[[6,3], [0,6], [6,2], [1,4], [6,6], [1,3], [7,5], [0,5], [7,6]],
[[4,3], [2,5], [4,2], [2,4], [5,6], [3,3], [6,6], [1,4], [5,5]]
// var current = board[4][3] = board[6][3];
// var last = board[6][3] = null;
// console.log(board.join('\n' + '|'));
// var current = moves[0] var to = moves[0]
// d4, Nf6, c4, e6, g3, d5, Bg2, Bg7, Nf3
    // TODO: Fill me in!
  ]; // END moves

  // var current; TODO: do we need this?
var current = moves[0][1];
  // You don't need to understand `globals` yet...
  var game = (globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();

      return this;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      // Doesn't this seem to be missing something?
      return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      // Another good place for code...
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // Write some code here...
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    applyMove: function (from, to){
      board.to = board.from;
      board.from = null;
      // You should write something in here...
    } // END applyMove
  }); // END game
  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
