import React, { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react";
import CurrentDate from "../date";
const axios = require("axios");


function CovidSearch() {

    const [form, setState] = useState({
        id: "",
        country_name: "USA",
        total_cases: "",
        new_cases: "",
        active_cases: "",
        total_deaths: "",
        new_deaths: "",
        total_recovered: "",
        serious_critical: "",
        region: null,
        total_cases_per1m: "",
        record_date: ""
    });

    const date = CurrentDate();

    useEffect(() => {
        // an API call.
        axios({
            "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country=" + form.country_name +"&date=" + date,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "2053485844mshcfbaee287004834p147101jsnc9bd5f5866a2"
            }
            // , "params": {
            //     "country": "<required>",
            //     "date": "<required>"
            // }
        })
            .then((response) => {
                console.log(response.data);
                const obj = response.data;
                const last = obj.stat_by_country.length - 1;
                const currentData = obj.stat_by_country[last];
                console.log(currentData);
                setState({
                    ...form,
                    id: currentData.id,
                    country_name: currentData.country_name,
                    total_cases: currentData.total_cases,
                    new_cases: currentData.new_cases,
                    active_cases: currentData.active_cases,
                    total_deaths: currentData.total_deaths,
                    new_deaths: currentData.new_deaths,
                    total_recovered: currentData.total_recovered,
                    serious_critical: currentData.serious_critical,
                    region: currentData.region,
                    total_cases_per1m: currentData.total_cases_per1m,
                    record_date: currentData.record_date
                });
            })
            .catch((error) => {
                console.log(error)
            })

    }, [form.country_name]);

    return (

        <Container text>
            <Header as='h2'>Covid Data</Header>
            <p>id:</p>
            <p>country_name: {form.country_name} </p>
            <p>total_cases: {form.total_cases} </p>
            <p>new_cases: {form.new_cases} </p>
            <p>active_cases: {form.active_cases} </p>
            <p>total_deaths: {form.total_deaths} </p>
            <p>new_deaths: {form.new_deaths} </p>
            <p>total_recovered: {form.total_recovered} </p>
            <p>serious_critical: {form.serious_critical} </p>
            <p>region: {form.region} </p>
            <p>total_cases_per1m: {form.total_cases_per1m} </p>
            <p>record_date: {form.record_date} </p>
        </Container>

    )
}


// API key 0d7e71ff7ddd480b83368a04bb626671

export default CovidSearch;