const {mongoose} = require('../server/db/mongoose');
var {Todo}= require('../server/models/todo');
var {User} = require('../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });
// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5d2f603ed7a0071e858cebd7').then((todo)=>{
  console.log(todo);
});

Todo
.findOneAndRemove({_id:"5d2f603ed7a0071e858cebd7"}).then((todo)=>{

});