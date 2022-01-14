function cardBuilder() {
    const numbers = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    const shapes = ["Hearts", "Diamonds", "Spades", "Clubs"];

    const cards = [];
    for (let s = 0; s < shapes.length; s++) {
      for (let n = 0; n < numbers.length; n++) {
        const card_number = numbers[n];
        const card_shape = shapes[s];
        cards.push({ card_number, card_shape });
      }
    }
    return cards;
}

function cardRandomiser(cards) {

    const randomisedCards = [];

    var loopLength = cards.length;
    for (let i=0; i<loopLength; i++){
        var random = Math.floor(Math.random() * cards.length);
        
        var card_number = cards[random].card_number;
        var card_shape = cards[random].card_shape;
        cards.splice(random, 1);
        
        randomisedCards.push({ card_number, card_shape });
    }
    return randomisedCards;
}

export function deckCreator() {
    var cards = cardBuilder();
    cards = cardRandomiser(cards);
    return cards;
}