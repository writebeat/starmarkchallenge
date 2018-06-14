import React from 'react';

/**
 * formatPhone takes a phone number in just about any format, and returns
 * a properly formatted phone number: (123) 456-7890 x123. It
 * also ignores any digits before the last 10 digits of the
 * phone number. So, for example: 1-123-456-7890, the 1 in the
 * beginning gets dropped.
 * @param  {String} phone String containing phone number in any format,
 *                        potentially including extension at the end,
 *                        prefixed by "x".
 * @return {String}       String containing properly formatted phone
 *                        number, including extension at the end,
 *                        if present.
 */
const formatPhone = (phone) => {
  // Get the extension, if it exists.
  let phoneSplit = phone.toLowerCase().split('x');
  let extension = (phoneSplit.length > 1) ? ' x' + phoneSplit[1] : '';
  // Get the last 10 digits of the number, to ignore any country codes.
  let phoneDigits = ("" + phoneSplit[0]).replace(/\D/g, '').slice(-10);
  // Properly format the phone number.
  let phoneReplace = phoneDigits.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  // Add the extension. If extension was blank, then nothing will be added.
  let phoneFormatted = phoneReplace + extension;

  return phoneFormatted;
}

/**
 * formatDate takes a date string and formats it as "mm dd, yyyy".
 * @param  {String} date A string containing a date.
 * @return {String}      New string containing the formatted date.
 */
const formatDate = (date) => {
  console.log(date);
  let newDate = new Date(date);
  // Pad the month and day with a 0 if it is a single digit.
  let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  let day = ("0" + (newDate.getDate())).slice(-2);
  let year = newDate.getFullYear();
  // Return formatted date as "mm dd, yyyy".
  return `${month} ${day}, ${year}`;
}

/**
 * sortLastNames takes a JSON data object that contains at least a 'lastName'
 * property, and returns the same object, but sorted in alphabetical order of
 * the 'lastName' property.
 * @param  {Object} jsonData Employees data in JSON format.
 * @return {Object}          The same data provided, only sorted by 'lastName'.
 */
const sortLastNames = (jsonData) => {
  jsonData.sort((a, b) => {
    // Let's make sure we're comparing the same exact characters, so force
    // uppercase, just in case.
    let emp1 = a.lastName.toUpperCase();
    let emp2 = b.lastName.toUpperCase();

    return (emp1 < emp2)
      ? -1
      : (emp1 > emp2)
        ? 1
        : 0;
  });
  return jsonData;
}

/**
 * detailLine is a helper function to reduce redundant markup in
 * the Employee component. It will render out a ListItem component,
 * depending on which field (item) it is fed. If it is fed 'phone',
 * then it will first format the number before using it.
 * @param  {String} item    The name of the field we will be rendering.
 * @param  {Object} info    Employee data object containing all the fields.
 * @return {JSX Component}  ListItem component containing the field title,
 *                          as well as the value of that field.
 */
const detailLine = (item, info) => {
    if (!info[item]) return null;
    if (item.toLowerCase() === 'phone') {
      return (
          <li key={item}>
            <span className="itemTitle">{item}: </span>
            <span className={item}>{formatPhone(info[item])}</span>
          </li>
      );
    }
    return (
      <li key={item}>
        <span className="itemTitle">{item}: </span>
        <span className={item}>{info[item]}</span>
      </li>
    );
};

export {
  formatPhone,
  formatDate,
  sortLastNames,
  detailLine
};
