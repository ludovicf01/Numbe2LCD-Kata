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
        for (let i = 0; i < one.length; i++) {
            console.log(one[i]);   
        }
    return one;
    }
    if(number === '2'){
        for (let i = 0; i < two.length; i++) {
            console.log(two[i]);   
        }
    return two;
    }
    if(number === '3'){
        for (let i = 0; i < three.length; i++) {
            console.log(three[i]);   
        }
    return three;
    }
}
 
module.exports = {
    transform : transform
}

rl.question('tape your number: ', (answer) => {
    transform(answer);
    rl.close();
});

