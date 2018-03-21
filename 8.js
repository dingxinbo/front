let Diamond = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];
let Spade = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];
let Heart = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];
let Club = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];
let cards = [Diamond,Spade,Heart,Club];
let cards1 = ['Diamond','Spade','Heart','Club'];
let currentCard;
let  newCards = [];
let xx,x;


while(Diamond.length>0&&Spade.length>0&&Heart.length>0&&Club.length>0){
    xx=Math.floor(Math.random()*4);
    currentCard =cards[xx];
    
    newCards.push(`${cards1[xx]} ${currentCard.shift()}`);
}
console.log(newCards);