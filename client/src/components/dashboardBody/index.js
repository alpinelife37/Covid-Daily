import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import News from "../news";
import CovidSearch from "../covid_api";
import DropdownCountrySearchSelection from "../layout/Countrydropdown";


class DashboardBody extends Component {

    render() {

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>

                    <Menu.Item position="right">
                        <DropdownCountrySearchSelection style={{ marginRight: 15 }} />
                    </Menu.Item>
                </Menu>
                <News />
                <CovidSearch />
            </Segment>
        );
    }
}



export default DashboardBody;


