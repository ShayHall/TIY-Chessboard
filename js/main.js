(function(globals){
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
  var moves = [ { from:{rank:6, file:3}, to:{rank:4,file:3}},
                { from:{rank:0, file:6}, to:{rank:2,file:5}},
                { from:{rank:6, file:2}, to:{rank:4,file:2}},
                { from:{rank:1, file:4}, to:{rank:2,file:4}},
                { from:{rank:6, file:6}, to:{rank:5,file:6}},
                { from:{rank:1, file:3}, to:{rank:3,file:3}},
                { from:{rank:7, file:5}, to:{rank:6,file:6}},
                { from:{rank:0, file:5}, to:{rank:1,file:4}},
                { from:{rank:7, file:6}, to:{rank:5,file:5}}
  ]; // END moves
//from   [ [6,3],[0,6],[6,2],[1,4],[6,6],[1,3],[7,5],[0,5],[7,6] ]
//to     [ [4,3],[2,5],[4,2],[2,4],[5,6],[3,3],[6,6],[1,4],[5,5] ]
var currentMove = 0;

  // var current; TODO: do we need this?

  // You don't need to understand `globals` yet...
  var game = globals.game = { //globals is the parameter to our IIFE, so by calling game on globals, it's allowed out of the death fence.
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
      if (currentMove < moves.length) {
      game.applyMove(moves[currentMove].from, moves[currentMove].to);
      currentMove += 1;
  } else {
    currentMove = moves.length;
  };
    console.log(currentMove);
    console.log(game.tracer());

    return this;
    },

    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      if (currentMove > 0) {
        currentMove -= 1;
        game.applyMove(moves[currentMove].to, moves[currentMove].from);
      } else {
        currentMove = 0;
      };
      console.log(currentMove);
      console.log(game.tracer());
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){

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

  for ( rank = 0; rank < board.length; rank++ ){
       bullet += '|';
       for ( var file = 0; file < board[rank].length; file++ ){
         bullet += (board[rank][file] || ' ') + '|';
       }
       bullet += '\n';
     }      return bullet;
   },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     */
    applyMove: function(from, to){
      board[to.rank][to.file] = board[from.rank][from.file];
      board[from.rank][from.file] = null;

    } // END applyMove
  }; // END game
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
