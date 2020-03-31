import React, { Component } from "react";
import { Container, Header} from "semantic-ui-react";
import NewsAPI from "../news_api";





function News () {

const article = NewsAPI();
console.log("newscomponent:", article);
console.log(article[0]);
const title = article;

    return (
    
    <Container text>
      <Header as='h2'>News Header: {title}</Header>
      <p>
          Body Text:
      </p>
    </Container>
    
  )
}


// API key 0d7e71ff7ddd480b83368a04bb626671

export default News;