const loadquotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))    
    // console.log kete function er nam lekhbo akn ,,  nicer line e const kore functioner nam lekhe id call korbo
}

const displayQuotes = quotes =>{
    const blockQuote = document.getElementById('quotes')
    console.log(quotes)
    blockQuote.innerHTML = quotes.quote;
}


loadquotes()