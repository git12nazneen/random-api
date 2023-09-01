const loadquote1 = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then( data => displayData(data))
}
const displayData = quote1 =>{
    const blockQuote = document.getElementById('quote1')
    console.log(quote1)
    blockQuote.innerHTML = quote1.quote;
    // blockQuote.innerHTML = quote1.quote
    // blockQuote.innerHTML = quote1.quote
    // blockQuote.innerHTML = quote1.quote
    // blockQuote.innerHTML = quote1.quote
    // blockQuote.innerHTML = quote1.quote
    // blockQuote.innerHTML = quote1.quote
    // blockQuote.innerHTML =  quote1.quote
}

loadquote1()