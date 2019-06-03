const readline = require('readline');

let one = [' ', ' |',' |']
let two = [' _ ', ' _|','|_'];
let three = [' _', ' _|',' _|'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function transform(number) {
    if(number === '1'){
        return one;
    }
    if(number === '2'){
        return two;
    }
    if(number === '3'){
        return three;
    }else{
        return 'error';
    }
}

function show(number){
    if(number === 'error'){
        console.log(number);
    }else{
        for (let i = 0; i < number.length; i++) {
            console.log(number[i]);   
        }
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

