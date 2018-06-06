firstQuote = {
    text: "All generalizations are false, including this one.",
    author: "Mark Twain",
    color: "black"
}

var quotes = [
    {
        text: "I am much pleased to find how very well I stand work & how my powers" +
        " of attention & continued effort increase.",
        author: "Adele Lovelace",
        color: "red",
        image: "img/Karen_Sparck.png"
    },
    {
        text: "There is not just one Trans Movement. We have to learn to be allies to each other.",
        author: "Angelica Ross",
        color: "navy",
        image: "img/Angelica-Ross.png"
    },
    {
        text: "I do know the technique, I don't apply it but my ideas. I get committed to it.",
        author: "Ida Holz",
        color: "cadetblue",
        image: "img/IdaHolz.png"
    },
    {
        text: "Engineers should strive to create a system that is designed for humans in their natural form.",
        author: "Radia Perlman",
        color: "slateblue",
        image: "img/HollyGibson.png"

    },
    {
        text: "Social media is that daily feed that reminds people that you exist and it has to be as transparent" +
        " and true as everything else you do, or people will call you out on it.",
        author: "Frances Allen",
        color: "orange",
        image: "img/Shirley-Ann-effect.png"
    },
    {
        text: "It's not subtle or restrained. It's not any of the things you like to think apply to your acting.",
        author: "Margaret Hamilton",
        color: "seagreen",
        image: "img/AdeleGoldberg.png"
    },
    {
        text: "The first factor is self-motivation and passion to learn.",
        author: "Lesley Carhart",
        color: "hotpink",
        image: "img/Lesley-Carhart.png"

    }
];

function init() {

    displayQuote(quotes);
    setInterval("displayQuote(quotes)", 8000);

}

window.onload = init;


function displayQuote(quotes){
    var index = Math.floor(Math.random() * quotes.length);
    var quote = quotes[index];

    var textElement = document.getElementById("text");
    var authorElement = document.getElementById("author");
    var imageElement = document.getElementById("image");

    textElement.innerHTML = quote.text;
    authorElement.innerHTML = quote.author;
    imageElement.innerHTML =`<img src=\"` + quote.image + `"/>`;

    var bigBubble = document.getElementById("bigBubble");
    bigBubble.style.background = quote.color;
    var mediumBubble = document.getElementById("mediumBubble");
    mediumBubble.style.background = quote.color;
    var smallBubble = document.getElementById("smallBubble");
    smallBubble.style.background = quote.color;
}



