"use strict";
//1
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((result) => {
    localStorage.setItem("user", JSON.stringify(result));
    const user = localStorage.getItem("user", JSON.stringify(result));
    if (user) {
    console.log(JSON.parse(user));
    }
    else {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
        })
    }
  })
  .catch((error) => console.error(error));

//2
function isValidDateFormat(str) {
    let regexp = /^\d\d\d\d\/\d\d\/\d\d \d\d:\d\d$/;
    let validDate = regexp.test(str);
        if (str = validDate) {
            return true;
        }
        else {
            return false;
        }
}
console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false

//3
function isAfter(startDate, endDate) {
      let start = new Date(startDate);
      let end = new Date(endDate);
      if (Date.parse(start) > Date.parse(end)) {
        return true;
      }
      else {
        return false;
      }
    };
    console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
    console.log(isAfter(1648636135000, 1648549735000)); // true
    console.log(isAfter(1648549735000, 1648636135000)); // false