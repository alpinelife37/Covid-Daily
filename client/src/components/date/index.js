import React, { Component } from "react";

function CurrentDate() {
    var today = new Date();

    function getFullMonth() {
        month = (today.getMonth() + 1);
        console.log(month);
        if (month < 9)
            return "0" + month;
        else
            return month;
    }

    function getFullDay() {
        day = (today.getDate());
        console.log(day);
        if (day < 9)
            return "0" + day;
        else
            return day;
    }

    var date = today.getFullYear() + '-' + (getFullMonth()) + '-' + (getFullDay());
    console.log(date);
    return date;
}

export default CurrentDate;