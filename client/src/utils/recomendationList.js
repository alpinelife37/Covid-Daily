export default {
  none: {
    id: "Low chance that you have COVID-19",
    color: "green",
    contenthead: "Looks like you dont have any symptoms!",
    contentbody:
      "Guess what? You could still be infected and not showing any symptoms at all! Its best to still practice social distancing, and to follow your states or communities guidelines."
  },
  low: {
    id: "Warning!",
    color: "yellow",
    contenthead: "Warning, you may be a-symptomatic!",
    contentbody:
      "Please try to quarantine yourself if you can."
  },
  medium: {
    id: "ALERT!",
    color: "orange",
    contenthead: "Alert! Theirs a very high chance you have the virus.",
    contentbody: "Please get tested as soon as possible!"
  },
  high: {
    id: "DANGER!",
    color: "red",
    contenthead: "Danger! You need professional medical care.",
    contentbody: "Your body is having trouble recovering, seek immediate care"
  }
};
