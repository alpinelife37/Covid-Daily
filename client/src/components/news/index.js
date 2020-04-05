import React, { useState, useEffect } from "react";
import { Container, Header, Image } from "semantic-ui-react";
import CurrentDate from "../date";






function News() {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();
    const [url, setUrl] = useState();
    const [imgsrc, setImgsrc] = useState();


    const date = CurrentDate();

    var queryUrl = 'https://newsapi.org/v2/top-headlines?' +
        'q=corona&' +
        'country=us&' +
        'from=' + date + '&' +
        'sortBy=popularity&' +
        'apiKey=0d7e71ff7ddd480b83368a04bb626671';

    // Powered by news API
    // API key 0d7e71ff7ddd480b83368a04bb626671
    var req = new Request(queryUrl);



    useEffect(() => {
        // For demonstration purposes, we mock an API call.
        fetch(req)
            .then(function (response) {
                response.json().then(data => {
                    // do something with your data
                    //console.log(data.articles);

                    let article;
                    let i;
                    for (i = 0; i < data.articles.length; i++) {
                        article = data.articles[i];
                        //console.log(article);
                        if (article.title && article.description && article.author && article.url && article.urlToImage) {
                             break;
                        }
                    }


                    setTitle(article.title);
                    setBody(article.description);
                    setAuthor(article.author);
                    setUrl(article.url);
                    setImgsrc(article.urlToImage);
                });
            });
        // API.getDeveloper.then((res) => {
        //     setDeveloperState(res);
        //     console.log("Developer State:");
        //     console.log(developerState);

    }, []);


    return (

        <Container text>
            <Header as='h2'> <a href={url}>{title}</a></Header>
            <Image
                src={imgsrc}
                as='a'
                size='medium'
                href={url}
                target='_blank'
            />
            <p>Body Text: {body}</p>
            <br />
            <p> Author: {author}</p>
            <br />
            <p>Powered by news API</p>
        </Container>

    )
}


// API key 0d7e71ff7ddd480b83368a04bb626671

export default News;