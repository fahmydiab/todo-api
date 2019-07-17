const {mongoose} = require('./../server/db/mongoose');
var {Todo}= require('./../server/models/todo');
var {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = "5d2dc060d6f42817f81f1df1";

// var id = "5d2ddddb22b8073490a095f5";

User.findById(id).then((user)=>{
 if(!user){
     console.log('unable to find user');
 }
 console.log(JSON.stringify(user,undefined,2));

},(e)=>{
    console.log(e);
});

// if(!ObjectID.isValid(id)){
//   console.log('ID is not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e)=>console.log(e));