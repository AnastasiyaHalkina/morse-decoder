const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
  }

function decode(expr) {
    // write your solution here
    let result = '';

    while (expr) {
        let letter = expr.slice(0, 10);

        if ( !letter.includes('*') ) {
            letter = letter.replaceAll('10', '.').replaceAll('11', '-').replaceAll('0', '');
            result += MORSE_TABLE[letter];
        } else {
            result += ' ';
        }
        expr = expr.slice(10);
    }
    return result;
}

module.exports = {
    decode
}