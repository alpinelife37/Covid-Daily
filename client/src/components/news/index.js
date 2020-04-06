import React, { Component } from "react";
import { Card, Header, Image } from "semantic-ui-react";
import CurrentDate from "../date";
const axios = require("axios");


const date = CurrentDate();

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            author: "",
            url: "",
            imgsrc: "",
            country: "US"
        }

    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState(
    //         { country: nextProps.value }, () =>{
            
    //         var queryUrl = 'https://newsapi.org/v2/top-headlines?' +
    //         'q=corona&' +
    //         'country=' + this.state.country + '&' +
    //         'from=' + date + '&' +
    //         'sortBy=popularity&' +
    //         'apiKey=0d7e71ff7ddd480b83368a04bb626671';

    //         // Powered by news API
    //         // API key 0d7e71ff7ddd480b83368a04bb626671
    //         var req = new Request(queryUrl);


    //         fetch(req)
    //             .then(function (response) {
    //                 response.json().then(data => {
    //                     // do something with your data
    //                     //console.log(data.articles);

    //                     let article;
    //                     let i;
    //                     for (i = 0; i < data.articles.length; i++) {
    //                         article = data.articles[i];
    //                         //console.log(article);
    //                         if (article.title && article.description && article.author && article.url && article.urlToImage) {
    //                             break;
    //                         }
    //                     };
    //                     console.log(article.title);

    //                     this.setState({
    //                         title: article.title,
    //                         body: article.description,
    //                         author: article.author,
    //                         url: article.url,
    //                         imgsrc: article.urlToImage
    //                     });

    //                 });

    //             });

    //         });
    // }



    componentDidMount() {
        // an API call.
        let self = this;
        var queryUrl = 'https://newsapi.org/v2/top-headlines?' +
            'q=corona&' +
            'country=' + this.state.country + '&' +
            'from=' + date + '&' +
            'sortBy=popularity&' +
            'apiKey=0d7e71ff7ddd480b83368a04bb626671';

        // Powered by news API
        // API key 0d7e71ff7ddd480b83368a04bb626671
        var req = new Request(queryUrl);


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
                    };
                    console.log(article.title);

                    self.setState({
                        title: article.title,
                        body: article.description,
                        author: article.author,
                        url: article.url,
                        imgsrc: article.urlToImage
                    });

                });

            });

    };

    render() {
        return (

            <Card.Content style={{ width: "100%" }}>
                <Header as='h2'> <a href={this.state.url}>{this.state.title}</a></Header>
                <Image
                    src={this.state.imgsrc}
                    as='a'
                    size='medium'
                    href={this.state.url}
                    target='_blank'
                />
                <p>Body Text: {this.state.body}</p>
                <br />
                <p> Author: {this.state.author}</p>
                <br />
                <p>Powered by news API</p>
            </Card.Content>


        )
    }
}


// API key 0d7e71ff7ddd480b83368a04bb626671

export default News;