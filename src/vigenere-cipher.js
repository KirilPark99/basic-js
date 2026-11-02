
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
function transformMessage(message, key, direction, reverse) {
  if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

  const text = String(message).toUpperCase();
  const keyword = String(key).toUpperCase();
  let keyIndex = 0;
  const transformed = text.replace(/[A-Z]/g, (character) => {
    const shift = keyword.charCodeAt(keyIndex % keyword.length) - 65;
    keyIndex += 1;
    return String.fromCharCode(((character.charCodeAt(0) - 65 + direction * shift + 26) % 26) + 65);
  });

  return reverse ? Array.from(transformed).reverse().join('') : transformed;
}

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.reverse = direct === false;
  }

  encrypt(message, key) {
    return transformMessage(message, key, 1, this.reverse);
  }

  decrypt(message, key) {
    return transformMessage(message, key, -1, this.reverse);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
