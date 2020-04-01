import React from "react";
import { List, Header, Container } from "semantic-ui-react";

function Links() {
  return (
    <Container>
      <Header as="h3">Government/Local</Header>
      <List>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
              CDC
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.who.int/gpsc/clean_hands_protection/en/">
              World Health Organization--Proper Handwashing
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://coronavirus.jhu.edu/map.html">
              John Hopkins Coronavirus World Map
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="http://www.ushospitalfinder.com/">USA Hospital Finder</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.whitehouse.gov/live/">White House Live</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.trucking.org/COVID19">
              America Trucker Assocation
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.dol.gov/coronavirus">
              U.S. Department of Labor
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/">
              U.S. Department of State Travel Advisories
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.fns.usda.gov/disaster/pandemic/covid-19">
              USDA SNAP response to Covid-19
            </a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3">Delivery Options</Header>
      <List>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.grubhub.com/">Grubhub</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://postmates.com/">Postmates</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.amazon.com/">Amazon</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.hellofresh.com/">Hello Fresh</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3">Online Communication Tools</Header>
      <List>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://slack.com/">Slack</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.skype.com/">Skype</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://support.apple.com/en-ca/HT204380">
              Facetime (Apple users)
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.xfinity.com/prepare">
              Comcast internet options
            </a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3">Parent Resources</Header>
      <List>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://classroommagazines.scholastic.com/support/learnathome.html">
              Scholastic Learning
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://mommypoppins.com/">Mommy Poppins</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.getepic.com/">Epic Reading</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.abcmouse.com/">ABC Mouse</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://www.youtube.com/channel/UCYyJUEtYv-ZW7BgjhP3UbTg?reload=9">
              Virtual Disney Rides
            </a>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  );
}

export default Links;
