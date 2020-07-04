// Stwórz klasę DatePro, która pozwala na łatwą operację na datach w różnych formatach

// class DatePro{
//     constructor(dateAsString, inputDateFormat='DD.MM.YYYY'){
//         // ...
//     }

//     format(outputStringFormat='DD.MM.YYYY'){
//         // ...
//     }
// }

// // to powinno zadziałać:

// const date1 = '23.03'
// const formatDate1 = 'DD.MM'
// const instance1 = new DatePro(date1, formatDate1)

// const date2 = '03/23/20'
// const formatDate2 = 'MM/DD/YY'
// const instance2 = new DatePro(date2, formatDate2)

// const date3 = '20-03-20'
// const formatDate3 = 'DD-MM-YYYY'
// const instance3 = new DatePro(date3, formatDate3)

// instance1.format() // '23.03.2020'
// instance2.format() // '23.03.2020'
// instance3.format() // '23.03.2020'

// const date = new Date("2020-11-20");
// console.log(date.setMonth(4));
const date2 = "03/23/20";
const formatDate2 = "MM/DD/YY";

function cutDate(fulldate, formatdate, char) {
  const sliceDate = fulldate.split(findSeparator(fulldate));
  const sliceFormat = formatdate.split(findSeparator(formatdate));
  let idx;
  const newFormat = sliceFormat.forEach((el, index) => {
    if (el.includes(char)) {
      return (idx = index);
    }
  });

  console.log(fulldate, sliceDate[idx], sliceFormat, newFormat, idx);

  return;
}
console.log(cutDate(date2, formatDate2, "D"));

function findSeparator(formatstring) {
  //   console.log(formatstring.includes("-"));
  if (formatstring.includes(".")) {
    return ".";
  } else if (formatstring.includes("/")) {
    return "/";
  } else if (formatstring.includes("-")) {
    return "-";
  }
}

// console.log(findSeparator(date2));
