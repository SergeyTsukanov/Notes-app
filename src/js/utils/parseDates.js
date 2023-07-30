const regexp = /(?:0?[1-9]|[1-2][0-9]|3[0-1])\/(?:0?[1-9]|1[0-2])\/\d{4}/g;
const parseDates = (str) => {
  let match;
  const allMatches = [];

  while ((match = regexp.exec(str)) !== null) {
    allMatches.push(match[0]);
  }

  return allMatches.join(", ");
};

export default parseDates;
