import React from "react";
import {
  Container,
  Segment,
  Grid,
  List,
  Header,
  Divider
} from "semantic-ui-react";

export default function Footer() {
  return (
    <Container>
      <Segment vertical style={{ marginBottom: 25}}>
        <Container textAlign="center">

          <Divider  />
          <List horizontal divided link size="small">
            <List.Item as="a" href="https://github.com/alpinelife37/Covid-Daily" target="_">
              COVID-Daily
            </List.Item>
            <List.Item>&copy; 2020</List.Item>
          </List>
        </Container>
      </Segment>
    </Container>
  );
}
