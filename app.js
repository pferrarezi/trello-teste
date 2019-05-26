var Trello = require("trello");
var trello = new Trello("foo-key", "foo-token");

// trello.addCard(
//   "Clean car",
//   "Wax on, wax off",
//   "5ce31256f473ef82a3018581",
//   function(error, trelloCard) {
//     if (error) {
//       console.log("Could not add card:", error);
//     } else {
//       console.log("Added card:", trelloCard);
//     }
//   }
// );

var cardsPromise = trello.getBoards("mee");
cardsPromise.then(cards => {
  //do stuff
  console.log(cards);
});
