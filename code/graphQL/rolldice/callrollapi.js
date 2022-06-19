var fetch = require("request");
var dice = 3;
var sides = 6;
var query = `query RollDice($dice: Int!, $side: Int){
    rollDice({numDice: $dice, numSides: $sides})
}`;

fetch('/graphql', {
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        query,
        variable: {dice,sides}
    })
})
    .then(r => r.json())
    .then(data => console.log('data returned:', data))