function email(first, last, year){
  var emailAddress = graduationYear(year)+first[0]+last+"@stpatrick.org";
  return emailAddress;
}

function teacherEmail(first, last){
  var emailAddress = first[0]+last+"@stpatrick.org";
  return emailAddress;
}

function graduationYear(grade){

  if(typeof(grade)== "number"){
    return String(grade % 10);
  }
  
  else if(typeof(grade) == "string"){
      
    var thisYear = new Date();
    thisYear = thisYear.getUTCFullYear();
  
    if(grade == "freshman"){
      return (thisYear + 4) % 10;
    }
    if(grade == "sophomore"){
      return (thisYear + 3) % 10;
    }
    if(grade == "junior"){
      return (thisYear + 2) % 10;
    }
    if(grade == "senior"){
      return (thisYear + 1) % 10;
    }
  }
  else{
    return undefined;
  }
  
}
