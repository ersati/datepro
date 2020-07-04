// Stwórz klasę DatePro, która pozwala na łatwą operację na datach w różnych formatach

class DatePro {
  constructor(dateAsString, inputDateFormat = "DD.MM.YYYY") {
    // ...
  }
  separateDate(dateAsString) {
    const data = dateAsString;
    const sepData = data.split("");
    console.log;
  }

  format(outputStringFormat = "DD.MM.YYYY") {
    // ...
  }
}

// to powinno zadziałać:

const date1 = "23.03";
const formatDate1 = "DD.MM";
const instance1 = new DatePro(date1, formatDate1);

const date2 = "03/23/20";
const formatDate2 = "MM/DD/YY";
const instance2 = new DatePro(date2, formatDate2);

const date3 = "20-03-20";
const formatDate3 = "DD-MM-YYYY";
const instance3 = new DatePro(date3, formatDate3);

instance1.format(); // '23.03.2020'
instance2.format(); // '23.03.2020'
instance3.format(); // '23.03.2020'x

//const data = '20/03/2020';
// const sepdata = data.split('/');
// const haveit = data.includes('.');
// console.log(haveit)
// console.log(sepdata)

// const nda = sepdata.join('.')
// ;
// console.log(nda)
