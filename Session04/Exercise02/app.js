const comparer = require('./modules/comparer');
const calculator = require('./modules/calculator');

function exec(a, b) {

    console.log(`Comparing two numbers: ${a},${b}`);

    if(comparer.AreNumberEqual(a,b)){
        console.log('Numbers are equal\nAdding two numbers');
        console.log(calculator.Add(a,b));
    }else{
        console.log('Numbers are not equal\nSubtracting two numbers');
        console.log(calculator.Subtract(a,b));
    }
}

exec(5,10);
exec(5,5);