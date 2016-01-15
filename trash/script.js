var heartSymbol = "&hearts;"
var diamondSymbol = "&diams;"
var spadeSymbol = "&spades;"
var clubSymbol = "&clubs;"
var fclub = "5" + heartSymbol
var cardValues = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
var heartCards = [];
var diamondCards = [];
var spadeCards = [];
var clubCards = [];

function setCards() {
	for (x in cardValues) {
		heartCards.push(cardValues[x]+heartSymbol);
		diamondCards.push(cardValues[x]+diamondSymbol);
		spadeCards.push(cardValues[x]+spadeSymbol);
		clubCards.push(cardValues[x]+clubSymbol);
	}
}

$(document).ready(function() {
	setCards();
	$("#he").html(fclub);
	$("#deckClub").html(clubCards)
	$("#deckSpade").html(spadeCards)
	$("#deckDiamond").html(diamondCards)
	$("#deckHeart").html(heartCards)
});