class DatePro {
  constructor(dateAsString, inputDateFormat = "DD.MM.YYYY") {
    this.year = this.splitDate(dateAsString, inputDateFormat, "Y");
    this.month = this.splitDate(dateAsString, inputDateFormat, "M");
    this.day = this.splitDate(dateAsString, inputDateFormat, "D");
  }

  searchForSeparator(formatstring) {
    if (formatstring.includes(".")) {
      return ".";
    } else if (formatstring.includes("/")) {
      return "/";
    } else if (formatstring.includes("-")) {
      return "-";
    }
  }

  splitDate(fulldate, formatdate, char) {
    const sliceDate = fulldate.split(this.searchForSeparator(fulldate));
    const sliceFormat = formatdate.split(this.searchForSeparator(formatdate));
    let idx;
    const newFormat = sliceFormat.forEach((el, index) => {
      if (el.includes(char)) {
        return (idx = index);
      }
    });
    return sliceDate[idx];
  }

  format(outputStringFormat = "DD.MM.YYYY") {
    const separator = this.searchForSeparator(outputStringFormat);
    const sliceFormat = outputStringFormat.split(
      this.searchForSeparator(separator)
    );

    const arrayDate = sliceFormat.map((el) => {
      if (el === "DD") {
        return this.day;
      } else if (el === "MM") {
        return this.month;
      } else if (el === "YY") {
        return this.year.slice(-2);
      } else if (el === "YYYY") {
        return this.year;
      } else {
        return console.log("wrong format");
      }
    });

    const filteredArrayDate = arrayDate.filter(function (x) {
      return x !== undefined;
    });

    const newDate = filteredArrayDate.join(separator);
    console.log(newDate);
    return newDate;
  }
}

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
instance3.format(); // '23.03.2020'
