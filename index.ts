// Q106
// this function chck if a year is a leap year
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false