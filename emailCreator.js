function email(first, last, year){
  var emailAddress = String(year % 10)+first[0]+last+"@stpatrick.org";
  return emailAddress;
}
