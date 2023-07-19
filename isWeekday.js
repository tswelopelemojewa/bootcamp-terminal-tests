function isWeekday(wDay){
    return wDay.startsWith("M")||wDay.startsWith("F")||wDay.startsWith("T")||wDay.startsWith("W");
  }
  
  export default isWeekday;