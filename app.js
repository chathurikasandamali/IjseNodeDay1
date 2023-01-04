const validator = require('validator');
const yargs = require('yargs');

// console.log("Hello world!");

// const y = validator.isEmail('ddd');
// console.log(y);

// console.log(process.argv);
// console.log(process.argv[2]);

// if(process.argv[2] > 10){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }

// let grade = '';
// if(process.argv[2] > 75){
//     grade = 'A';
// }else if(process.argv[2] > 65){
//     grade = 'B';
// }else if(process.argv[2] > 55){
//     grade = 'c';
// }else{
//     grade = 'Fail'
// }
// console.log("Grade - ", grade);

//console.log(process.argv);


yargs.command({
    command: 'add',
    describe: 'add',
    builder: {
        num1: {
            describe: "number1",
            demandOption: true,
            type: 'number'
        }
    },
    handler: function(argv){
        console.log(argv.num1);
    }
})

// console.log(yargs.argv);
yargs.parse();