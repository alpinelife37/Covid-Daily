import React, { useState, useEffect } from "react";
import recomendationList from "../../utils/recomendationList";
import { Header, Card } from "semantic-ui-react";

export default function Recomendations({ severity }) {
  const [value, setValue] = useState(severity);
  // This will launch only if propName value has chaged.
  useEffect(() => {
    setValue(severity);
  }, [severity]);
  console.log("value: " + value);
  console.log("severity: " + severity);
  if (severity === 0) {
    return (
      <div style={{ marginTop: 25 }}>
        <Header color={recomendationList.none.color} as="h3">
          {recomendationList.none.id}
        </Header>
        <Card color={recomendationList.none.color} style={{ width: "auto" }}>
          <Card.Content id="recomendationscard" style={{ width: "100%" }}>
            <div>severity level: {severity}</div>
            <div>{recomendationList.none.contenthead}</div>
            <div>{recomendationList.none.contentbody}</div>
          </Card.Content>
        </Card>
      </div>
    );
  } else if (severity === 1 || severity === 2 || severity === 3) {
    return (
      <div style={{ marginTop: 25 }}>
        <Header color={recomendationList.low.color} as="h3">
          {recomendationList.low.id}
        </Header>
        <Card color={recomendationList.low.color} style={{ width: "auto" }}>
          <Card.Content id="recomendationscard" style={{ width: "100%" }}>
            <div>severity level: {severity}</div>
            <div>{recomendationList.low.contenthead}</div>
            <div>{recomendationList.low.contentbody}</div>
          </Card.Content>
        </Card>
      </div>
    );
  } else if (severity === 4 || severity === 5 || severity === 6) {
    return (
      <div style={{ marginTop: 25 }}>
        <Header color={recomendationList.medium.color} as="h3">
          {recomendationList.medium.id}
        </Header>
        <Card color={recomendationList.medium.color} style={{ width: "auto" }}>
          <Card.Content id="recomendationscard" style={{ width: "100%" }}>
            <div>severity level: {severity}</div>
            <div>{recomendationList.medium.contenthead}</div>
            <div>{recomendationList.medium.contentbody}</div>
          </Card.Content>
        </Card>
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: 25 }}>
        <Header color={recomendationList.high.color} as="h3">
          {recomendationList.high.id}
        </Header>
        <Card color={recomendationList.high.color} style={{ width: "auto" }}>
          <Card.Content id="recomendationscard" style={{ width: "100%" }}>
            <div>severity level: {severity}</div>
            <div>{recomendationList.high.contenthead}</div>
            <div>{recomendationList.high.contentbody}</div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
