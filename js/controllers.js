(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */

  var moveCounter = 0;
  // Controller for "next move"...
  jQuery(".fa-step-forward").on('click', function(event){

    moveCounter += 1;
    console.log(moveCounter);

    switch (moveCounter) {
    case 1:
      $("#d2").removeClass("white-pawn");
      $("#d4").addClass("white-pawn");
    break;
    case 2:
      $("#g8").removeClass("black-knight");
      $("#f6").addClass("black-knight");
    break;
    case 3:
      $("#c2").removeClass("white-pawn");
      $("#c4").addClass("white-pawn");
    break;
    case 4:
      $("#e7").removeClass("black-pawn");
      $("#e6").addClass("black-pawn");
    break;
    case 5:
      $("#g2").removeClass("white-pawn");
      $("#g3").addClass("white-pawn");
    break;
    case 6:
      $("#d7").removeClass("black-pawn");
      $("#d5").addClass("black-pawn");
    break;
    case 7:
      $("#f1").removeClass("white-bishop");
      $("#g2").addClass("white-bishop");
    break;
    case 8:
      $("#g8").removeClass("black-bishop");
      $("#e7").addClass("black-bishop");
    break;
    case 9:
      $("#g1").removeClass("white-knight");
      $("#f3").addClass("white-knight");
    break;
    case 10:
      alert("Game over");
    break;
    default:
      break;
  }

    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery(".fa-step-backward").on('click', function(event){
    // alert("step-backward");
  moveCounter -= 1;
    console.log(moveCounter);
    switch (moveCounter) {
    case 0:
      $("#d2").addClass("white-pawn");
      $("#d4").removeClass("white-pawn");
    break;
    case 1:
      $("#g8").addClass("black-knight");
      $("#f6").removeClass("black-knight");
    break;
    case 2:
      $("#c2").addClass("white-pawn");
      $("#c4").removeClass("white-pawn");
    break;
    case 3:
      $("#e7").addClass("black-pawn");
      $("#e6").removeClass("black-pawn");
    break;
    case 4:
      $("#g2").addClass("white-pawn");
      $("#g3").removeClass("white-pawn");
    break;
    case 5:
      $("#d7").addClass("black-pawn");
      $("#d5").removeClass("black-pawn");
    break;
    case 6:
      $("#f1").addClass("white-bishop");
      $("#g2").removeClass("white-bishop");
    break;
    case 7:
      $("#g8").addClass("black-bishop");
      $("#e7").removeClass("black-bishop");
    break;
    case 8:
      $("#g1").addClass("white-knight");
      $("#f3").removeClass("white-knight");
    break;
    case 9:
      alert("Back to beginning");
    break;
    default:
    break;
  }
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery(".fa-fast-forward").on('click'/*???on what(eventually use keyvalues..???*/, function(event){
      $("#d2").removeClass("white-pawn");
      $("#d4").addClass("white-pawn");
      $("#g8").removeClass("black-knight");
      $("#f6").addClass("black-knight");
      $("#c2").removeClass("white-pawn");
      $("#c4").addClass("white-pawn");
      $("#e7").removeClass("black-pawn");
      $("#e6").addClass("black-pawn");
      $("#g2").removeClass("white-pawn");
      $("#g3").addClass("white-pawn");
      $("#d7").removeClass("black-pawn");
      $("#d5").addClass("black-pawn");
      $("#f1").removeClass("white-bishop");
      $("#g2").addClass("white-bishop");
      $("#g8").removeClass("black-bishop");
      $("#e7").addClass("black-bishop");
      $("#g1").removeClass("white-knight");
      $("#f3").addClass("white-knight");
      alert("End of opening");

    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "reset"...
  jQuery(".fa-backward").on('click'/* dunno */, function(event){
    alert("Reset game");
    game.board = game.reset;  // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "watch game play automatically"...
  jQuery(".fa-play").on('click'/* dunno */, function(event){
    alert("Play auto");
     // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery(".fa-pause").on('click'/* dunno */, function(event){
    alert("pause");
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

})(window || module && module.exports || this)
