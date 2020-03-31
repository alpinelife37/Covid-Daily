import React, { Component, useState, useEffect } from "react";
import { Container, Header, Image } from "semantic-ui-react";
import CurrentDate from "../date";
import { set } from "mongoose";






function News() {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();
    const [url, setUrl] = useState();
    const [imgsrc, setImgsrc] = useState();


    const date = CurrentDate();

    var queryUrl = 'https://newsapi.org/v2/top-headlines?' +
        'q=covid-19&' +
        'country=us&' +
        'from=' + date + '&' +
        'sortBy=popularity&' +
        'apiKey=0d7e71ff7ddd480b83368a04bb626671';

    var req = new Request(queryUrl);



    useEffect(() => {
        // For demonstration purposes, we mock an API call.
        fetch(req)
            .then(function (response) {
                response.json().then(data => {
                    // do something with your data
                    console.log(data.articles);
            
                    setTitle(data.articles[0].title);
                    setBody(data.articles[0].description);
                    setAuthor(data.articles[0].author);
                    setUrl(data.articles[0].url);
                    setImgsrc(data.articles[0].urlToImage);

                });
            });
        // API.getDeveloper.then((res) => {
        //     setDeveloperState(res);
        //     console.log("Developer State:");
        //     console.log(developerState);

    }, []);


    return (

        <Container text>
            <Header as='h2'>News Header: {title}</Header>
            <Image
    src={imgsrc}
    as='a'
    size='medium'
    href={url}
    target='_blank'
  />
            <p>Body Text: {body}</p>
            <br/> 
            <p> Author: {author}</p>
            <br/>
            <p>Powered by news API</p> 
        </Container>

    )
}


// API key 0d7e71ff7ddd480b83368a04bb626671

export default News;