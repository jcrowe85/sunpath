export const convertTime = (isoTime) => {
  var date = isoTime;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var newformat = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + newformat;
};