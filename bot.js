var twit = require('twit');
var config = require('./config.js');
var quotes = require('./quotes.js');

var Twitter = new twit(config);

var repeated = [];

function getRandom() {
    return Math.floor(Math.random() * quotes.length);
}

setInterval(() => {
    var random = getRandom();
    if(!repeated.includes(random)){
        var tweetText = "\"" + quotes[random][0] + "\"" + " - " + quotes[random][1];
        var tweet = { status: tweetText};

        Twitter.post('statuses/update', tweet, (err, data, resp) => {
            if(data) console.log('data => ', data);
        })
        
        repeated.push(random);
    }
}, 600000);

