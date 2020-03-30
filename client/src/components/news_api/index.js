import React, { Component } from "react";
import CurrentDate from "../date"


function NewsAPI() {
    

    var url = 'http://newsapi.org/v2/top-headlines?' +
        'q=covid-19&' +
        'country=us&' +
        'from=' + CurrentDate + '&' +
        'sortBy=popularity&' +
        'apiKey=0d7e71ff7ddd480b83368a04bb626671';

    var req = new Request(url);

    fetch(req)
        .then(function (response) {
            console.log(response.json());
        })

}

// Powered by news API
// API key 0d7e71ff7ddd480b83368a04bb626671

export default NewsAPI;
