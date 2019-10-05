// Scrape Scripting

// Require request and cheerio

var request = require("request");
var cheerio = require("cheerio");

request("http://www.nytimes.com", function(err, res, body){

    var $ = cheerio.load(body);

    var articles = [];

    $(".css-8atqhb").each(function(i, element){

        var head = $(this).children(".css-n2blzn es182me0").text().trim();
        var sum = $(this).children(".css-1pfq5u e1n8kpyg0").text().trim();

        if (head && sum){
            var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            
            var dataToAdd = {
                headLine: headNeat,
                summary: sumNeat
            };

            articles.push(dataToAdd);

        }

        cb(articles);
    });
});

module.exports = scrape;