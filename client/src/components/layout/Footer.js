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
      <Segment vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }}>
        <Container textAlign="center">
          <Grid divided stackable>
            <Grid.Column width={3}>
              <Header as="h4" content="react" />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" content="react" />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" content="react" />
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" content="react" />
              <p>React</p>
            </Grid.Column>
          </Grid>

          <Divider section />
          <List horizontal divided link size="small">
            <List.Item as="a" href="" target="_">
              COVID-Daily
            </List.Item>
            <List.Item>&copy; 2020</List.Item>
          </List>
        </Container>
      </Segment>
    </Container>
  );
}
