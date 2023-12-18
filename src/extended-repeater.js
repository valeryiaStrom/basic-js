const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  const additions = [];
  for (let i = 0; i < (options.additionRepeatTimes ? options.additionRepeatTimes : 1); i++) {
    if (options.addition !== undefined ) {
      additions.push(options.addition);
    }
  }
  //[PLUS, PLUS, PLUS]
  const addition = additions.join(options.additionSeparator ? options.additionSeparator : '|');
//  PLUS00PLUS00PLUS

  const resultArr = [];
  for (let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i++) {
    resultArr.push(str + addition);
  }
//  [STRINGPLUS00PLUS00PLUS, STRINGPLUS00PLUS00PLUS, STRINGPLUS00PLUS00PLUS]
  const result = resultArr.join(options.separator ? options.separator : '+');
  return result;

}

module.exports = {
  repeater
};
