import React, { Component } from "react";

function CurrentDate() {
    var today = new Date();

    function getFullMonth() {
        month = (today.getMonth() + 1);
        if (month < 9)
            return "0" + month;
        else
            return month;
    }

    function getFullDay() {
        day = (today.getDate());
        if (day < 9)
            return "0" + day;
        else
            return day;
    }

    var date = today.getFullYear() + '-' + (getFullMonth()) + '-' + (getFullDay());
    return date;
}

export default CurrentDate;