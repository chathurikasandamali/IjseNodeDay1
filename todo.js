const fs = require('fs');
const { describe } = require('yargs');
const yargs = require('yargs');

//Write a file
// fs.writeFileSync('test.txt', 'abc');

//Read a file
// const readFile = fs.readFileSync('test.txt')
// console.log(readFile.toString());

// const obj = {
//     id: 1,
//     title: 'todo 1',
//     status: 'done'
// }

// const strObj = JSON.stringify(obj)
//console.log("StrObj", strObj);

//any file
//fs.writeFileSync('test.json', strObj);

// const readJson = fs.readFileSync('test.json') //byte stream aken anne
// console.log("ReadJson", readJson);
// const value = readJson.toString();
// console.log("Value", value);
// const jsObjectArr = JSON.parse(value)
// console.log(jsObjectArr)

// const newTodo = {
//     id: 3,
//     title: 'todo 3',
//     status: 'todo'
// }

// jsObjectArr.push(newTodo)
// fs.writeFileSync('test.json', JSON.stringify(jsObjectArr))

//get all todos: get
const getAllJson = fs.readFileSync('test.json')
const getAllString = getAllJson.toString()
const getAllObjArr = JSON.parse(getAllString)
console.log("Get All Todos : ", getAllObjArr)

//add new todo: add node todo.js id=1 title=" todo 4" status=todo
yargs.command({
    command: 'add',
    describe: 'add',
    builder: {
        id: {
            describe: 'id',
            demandOpation: true,
            type: 'number'
        },
        title: {
            describe: 'title',
            demandOpation: true,
            type: 'string'
        },
        status: {
            describe: 'status',
            demandOpation: true,
            type: 'string'
        },
    },
    handler: function(argv){
        // console.log("Argv", argv.status)
        const newList={
            id: argv.id,
            title: argv.title,
            status: argv.status
        }
        getAllObjArr.push(newList)
        fs.writeFileSync('test.json', JSON.stringify(getAllObjArr))
    }
})

//change todo status: status node todo.js status --id=4 --status=done           .find
yargs.command({
    command: 'status',
    describe: 'status',
    builder: {
        id: {
            describe: 'id',
            demandOpation: true,
            type: 'number'
        },
        status: {
            describe: 'status',
            demandOpation: true,
            type: 'string'
        },
    },
    handler: function(argv){
        for (var i in getAllObjArr) {
            if (getAllObjArr[i].id == argv.id) {
               getAllObjArr[i].status = argv.status;
            }
          }

        fs.writeFileSync('test.json', JSON.stringify(getAllObjArr))
    }
})

yargs.parse()