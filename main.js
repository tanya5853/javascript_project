let btn=document.getElementById("btn");
let output=document.getElementById("output");
let quote=
[
    "The purpose of our lives is to be happy.",
    "Life is what happens when you are busy making other plans.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life is failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Never let the fear of striking out keep you from playing the game.",
    "Money and success do not change people; they merely amplify what is already there.",
    "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    "The unexamined life is not worth living.",
    "Turn your wounds into wisdom.",
    "I like criticism. It makes you strong.",
    "You never really learn much from hearing yourself speak.",
    "Keep calm and carry on.",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "Life would be tragic if it were not funny."
];
btn.addEventListener('click',function(){
    var r=quote[Math.floor(Math.random()*quote.length)];
    output.innerHTML=r;
})
