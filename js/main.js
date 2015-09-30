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
  var moves = [ { from:{rank:6, file:3}, to:{rank:4,file:3} }
    // TODO: Fill me in!
  ]; // END moves

  // var current; TODO: do we need this?

  // You don't need to understand `globals` yet...
  var game = globals.game = {
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
          bullet += board[rank][file] || ' |';
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
    applyMove: function(from, to){

      console.log(moves[0].from);
      // You should write something in here...
    // moves[0].to = moves[0].from

// {from:{rank:6,file:3}, to:{rank:4,file:3}}
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




// OLD CODE BELOW
// OLD CODE BELOW
// OLD CODE BELOW
// OLD CODE BELOW








// (function(globals){ // IIFE: Immediately Invoked Function Expression
// })(window || module && module.exports || this);
//
// (function(globals){ // IIFE: Immediately Invoked Function Expression
// // Don't worry if that seems a little funky...
//
//   /**
//    * Internal representation of the game board in its current state.
//    *
//    * @see game.board
//    * @see game.tracer
//    * @see initial
//    * @var {Array} of {Array} of {String|null}
//    */
//   var board = initial(); // initialize the `board`
//
//   /**
//    * List of moves for the "Catalan Opening: Closed Variation" suitable for use
//    * as arguments to `applyMove` below.
//    *
//    * @see applyMove
//    * @var {Array} of...?
//    */
//   var moves = [  // TODO: Fill me in!
//     [ [6,3],[0,6],[6,2],[1,4],[6,6],[1,3],[7,5],[0,5],[7,6] ],//from
//     [ [4,3],[2,5],[4,2],[2,4],[5,6],[3,3],[6,6],[1,4],[5,5] ] //to
// ];
//
//   // var current; TODO: do we need this?
//   var game = (globals.game = {
//   // var current = Where and what ???
//
//     /**
//      * Provide a _copy_ of the game board in order to update the View from it
//      *
//      * @return {Array} of {Array} of {String|null}
//      */
//     board: function(){
//       return board.map(function(row){
//         return row.slice();
//       });
//     },
//     /**
//      * Reset the internal game board to it's initial state.
//      *
//      * @return {Object} the game object for Method Chaining
//      */
//     reset: function(){
//       board = initial();
//
//       return this;
//     },
//     /**
//      * Advance the internal game board to the next move.
//      *
//      * @return {Object} the game object for Method Chaining
//      * @todo Make this work!
//      */
//     next: function(){
//
//       // Doesn't this seem to be missing something?
//       return this;
//     },
//     /**
//      * Advance the internal game board to the previous move.
//      *
//      * @return {Object} the game object for Method Chaining
//      * @todo Make this work!
//      */
//     prev: function(){
//       // Another good place for code...
//       return this;
//     },
//     /**
//      * Advance the internal game board to the last move.
//      *
//      * @return {Object} the game object for Method Chaining
//      * @todo Make this work!
//      */
//     end: function(){
//       // Write some code here...
//       return this;
//     },
//     /**
//      * Provide a printable representation of the game board for use as a tracer
//      *
//      * @return {String} representation of `board`
//      * @todo Refactor to use Array methods?
//      */
//     tracer: function(){
//       var bullet = '';
//
//       for ( var rank = 0; rank < board.length; rank++ ){
//         bullet += '|';
//         for ( var file = 0; file < board[rank].length; file++ ){
//           bullet += (board[rank][file] || ' ') + '|';
//         }
//         bullet += '\n';
//       }
//
//       return bullet;
//     },
//     /**
//      * Apply a move to the game board, given a `from` and `to` position that both
//      * contain values for `rank` and `file`.
//      *
//      * @param {Object} from with `rank` and `file`
//      * @param {Object} to with `rank` and `file`
//      * @return undefined
//      *
//      * @todo Fill me in! ...and remove this comment.
//      */
//     applyMove: function (from, to){ // You should write something in here...
//     console.log("test from " + moves[0][0]);
//     console.log("test to " + moves[1][0]);
//     board[to] = board[from];
//     board[from] = null;
// // Let these two side effects stand on their own.
//
//     board[moves[1][0]] = board[moves[0][0]];
//     board[moves[0][0]] = null;
//     // console.log("board \n" + board.join('\n' + '|'));
//     // return board;
//     } // END applyMove
//   }); // END game
//   /**
//    * Provide the initial state of the game board, useful for any game.
//    *
//    * @return {Array} of {Array} of {String|null}
//    */
//   function initial(){
//     return [
//       [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
//       [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
//       Array(8).fill(null),
//       Array(8).fill(null),
//       Array(8).fill(null),
//       Array(8).fill(null),
//       [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
//       [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
//     ];
//   } // END initial
//
// // You are not expected to understand anything below this line...
// })(window || module && module.exports || this);
