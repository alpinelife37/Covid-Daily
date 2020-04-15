export default {
  none: {
    id: "Low chance that you have COVID-19",
    color: "green",
    contenthead: "Looks like you don't have any symptoms!",
    contentbody:
      "Guess what? You could still be infected and not show any symptoms at all! It's best to still practice social distancing, and to follow your state's or community's guidelines."
  },
  low: {
    id: "Warning!",
    color: "yellow",
    contenthead: "Warning, you may be asymptomatic!",
    contentbody:
      "Please try to quarantine yourself if you can."
  },
  medium: {
    id: "ALERT!",
    color: "orange",
    contenthead: "Alert! There is a very high chance that you have the virus.",
    contentbody: "Please get tested as soon as possible!"
  },
  high: {
    id: "DANGER!",
    color: "red",
    contenthead: "Danger! You need professional medical care.",
    contentbody: "Your body is having trouble recovering, seek immediate care."
  }
};
