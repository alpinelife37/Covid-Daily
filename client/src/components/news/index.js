import React, { Component } from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    // ButtonBack,
    // ButtonNext,
    DotGroup
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Header, Image } from "semantic-ui-react";
import CurrentDate from "../date";
import "./index.css";

const date = CurrentDate();

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredArticles: [],
            title: "",
            body: "",
            author: "",
            url: "",
            imgsrc: "",
            country: "US",
        };
    }
    componentWillReceiveProps(props) {
        this.setState(
            { country: props.country }, () => {
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

                fetch(req).then(function (response) {
                    response.json().then((data) => {


                        const filteredArticles = data.articles.filter((article) => {
                            return (
                                article.title &&
                                article.description &&
                                article.author &&
                                article.url &&
                                article.urlToImage
                            );
                        });


                        self.setState({ filteredArticles });
                    });
                });

            });
    }

    componentDidMount() {
        // an API call.
        let self = this;
        var queryUrl =
            "https://newsapi.org/v2/top-headlines?" +
            "q=corona&" +
            "country=" +
            this.state.country +
            "&" +
            "from=" +
            date +
            "&" +
            "sortBy=popularity&" +
            "apiKey=0d7e71ff7ddd480b83368a04bb626671";

        // Powered by news API
        // API key 0d7e71ff7ddd480b83368a04bb626671
        var req = new Request(queryUrl);

        fetch(req).then(function (response) {
            response.json().then((data) => {


                const filteredArticles = data.articles.filter((article) => {
                    return (
                        article.title &&
                        article.description &&
                        article.author &&
                        article.url &&
                        article.urlToImage
                    );
                });


                self.setState({ filteredArticles });

            });
        });
    }

    render() {
        return (
            <div>
                <CarouselProvider style={{ width: "100%", border: "1px solid gray", padding: 20 }}
                    naturalSlideWidth={100}
                    naturalSlideHeight={200}
                    totalSlides={5}
                    infinite={true}
                >         
                    <Slider>
                        {this.state.filteredArticles.slice(0, 5).map((article, i) => {
                            return (
                                <Slide key={i} index={i}>
                                    {" "}
                                    <Header as="h2">
                                        {" "}
                                        <a href={article.url}>{article.title}</a>
                                    </Header>
                                    <Image
                                        src={article.urlToImage}
                                        as="a"
                                        size="medium"
                                        href={article.url}
                                        target="_blank"
                                    />
                                    <p>{article.description}</p>
                                    <br />
                                    <hr />
                                    <i><p>Author: <b>{article.author}</b></p></i>
                                    <br />
                                    <i><p>Powered by <b>News API</b></p></i>
                                </Slide>
                            );
                        })}
                    </Slider>
                    <DotGroup style={{fontSize: "20px", margin: "50px"}} align="center" />
                    {/* <div style={{ textAlign: "center" }}>
                        <ButtonBack className="primary" style={{ marginRight: 10, background: "#4169E1", color: "white" }}>Back</ButtonBack>
                        <ButtonNext style={{ background: "#4169E1", color: "white" }}>Next</ButtonNext>
                    </div> */}
                </CarouselProvider>
            </div>
        );
    }
}

// API key 0d7e71ff7ddd480b83368a04bb626671

export default News;
