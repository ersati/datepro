const paginateArray = (dataEntries, settings) => {
  if (paginateArray.length !== 2) {
    console.log("no enought arguments");
  } else if (!Array.isArray(dataEntries)) {
    console.info("dataEntries is not an array");
  } else if (typeof settings !== "object" && typeof settings !== "function") {
    console.info("settings is required");
  } else if (!settings.hasOwnProperty("actualPageIdx")) {
    console.info("settings.actualPageIdx is undefined");
  } else if (!settings.hasOwnProperty("entriesOnPage")) {
    console.info("settings.entriesOnPage is undefined");
  } else {
    const { actualPageIdx, entriesOnPage } = settings;
    const start = (actualPageIdx - 1) * entriesOnPage;
    const end = start + entriesOnPage;

    return dataEntries.slice(start, end);
  }

  return [];
};

console.info(
  paginateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {
    actualPageIdx: 3,
    entriesOnPage: 3,
  })
);
