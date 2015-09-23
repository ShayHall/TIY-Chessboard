console.log("Sanity tracer bullet!");

var test = ('mocha').it,
  expect = ('chai').expect;
console.log(board);
test('board: is it a thing', function(){
  expect(board).to.exist;
});
