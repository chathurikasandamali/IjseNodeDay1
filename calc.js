const yargs = require('yargs');

yargs.command({
    command: 'sum',
    describe: 'sum process',
    builder: {
        num1: {
            describe: "number1",
            demandOption: true,
            type: 'number'
        }
    },
    handler: function(argv){
        console.log(argv.num1);
        console.log(argv.num2);
    }
})

yargs.parse()