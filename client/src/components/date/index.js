function CurrentDate() {
  var today = new Date();
  var month = today.getMonth() + 1;

  function getFullMonth() {
    if (month < 9) return "0" + month;
    else return month;
  }
  var day = today.getDate();
  function getFullDay() {
    if (day < 9) return "0" + day;
    else return day;
  }

  var date = today.getFullYear() + "-" + getFullMonth() + "-" + getFullDay();
  return date;
}

export default CurrentDate;
