const readline = require('readline');

let zero = [' _', '| |','|_|'];
let one = ['', ' |',' |'];
let two = [' _', ' _|','|_'];
let three = [' _', ' _|',' _|'];
let four = ['', '|_|','  |']
let error = [' _', '|_','|_']

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function transform(number) {
    switch (number) {
        case '0':
            return zero;
            break;
        case '1':
            return one;
            break;
        case '2':
            return two;
            break;
        case '3':
            return three;
            break;
        case '4':
            return four;
            break;
        default:
            return error
            break;
    }
}

function show(number){
    for (let i = 0; i < number.length; i++) {
        console.log(number[i]);   
    }
}
 
module.exports = {
    transform : transform
}

rl.question('tape your number: ', (answer) => {
    let digit = transform(answer);
    show(digit);
    rl.close();
});

