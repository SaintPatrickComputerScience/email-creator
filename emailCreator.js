function email(first, last, year){
  var emailAddress = String(year - 2018)+first[0]+last+"@stpatrick.org";
  return emailAddress;
}
