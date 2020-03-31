import React, { Component } from 'react';
import CurrentDate from "../date";


function NewsAPI() {
    const newsArray = [
        // title: "",
        // body: "",
        // imgurl: "",
        // url: ""
    ]
    const date = CurrentDate();

    var url = 'https://newsapi.org/v2/top-headlines?' +
        'q=covid-19&' +
        'country=us&' +
        'from=' + date + '&' +
        'sortBy=popularity&' +
        'apiKey=0d7e71ff7ddd480b83368a04bb626671';

    var req = new Request(url);

    fetch(req)
        .then(function (response) {
            response.json().then(data => {
                // do something with your data
                console.log(data.articles[0]);
                const article = data.articles[0];
                newsArray.push("title:" + "'" + article.title + "'", "body" + "'" + article.content + "'", "url:" + "'" + article.url + "'", "imagesrc:" + "'" + article.urlToImage + "'", "author:" + "'" + article.author + "'");
                
            });
        })
    return newsArray;
}

// Powered by news API
// API key 0d7e71ff7ddd480b83368a04bb626671

export default NewsAPI;
