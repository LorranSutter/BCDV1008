let uc = require('upper-case');

function greeter() {
    for (let i = 0; i < 10; i++) {
        console.log(uc.upperCase('hello world'));
    }
}

greeter();