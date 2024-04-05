// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const regx = /^chatbot/i;
  return regx.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  // return message.replaceAll(/emoji[0-9]+/g, '');
  const regex = new RegExp('emoji[0-9]+');
  return message.split(regex).join('');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  if (/^\(\+[0-9][0-9]\) [0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(number)) {
    return 'Thanks! You can now download me to your phone.';
  }
  return `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  //  return [
  //   'youtube.com',
  //   'theodinproject.com',
  //   'reddit.com',
  //   'notion.so'
  // ].filter((item) => userInput.includes(item))
  const REGEX = /\w+\.\w+/g;
  return userInput.match(REGEX);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  // const [lastName, firstName] = fullName.split(", ");
  // return "Nice to meet you, " + firstName + " " + lastName;
  const name = fullName.split(/,\s/).reverse().join(' ');
  return `Nice to meet you, ${name}`;
}
