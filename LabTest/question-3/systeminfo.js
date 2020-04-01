const os = require('os');

module.exports = {
    systemInfo: () => {
        console.log('\nOperating system Info:');
        console.log(`CPU architecture: ${os.arch()}`);
        console.log(`Host name: ${os.hostname()}`);
        console.log(`Name: ${os.type()}\n`);
    },
    userInfo: () => {
        console.log('\nUser Info:');
        console.log(`User name: ${os.userInfo().username}`);
        console.log(`dir: ${os.homedir()}\n`);
    }
}