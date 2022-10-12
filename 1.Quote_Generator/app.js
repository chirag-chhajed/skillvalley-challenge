const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector(".author"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter")

function randomQuote(){
    fetch("http://api.quotable.io/random?minLength=100&maxLength=140")
    .then(response => response.json())
    .then(result => {
        quoteText.innerHTML = result.content;

    })
}copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);