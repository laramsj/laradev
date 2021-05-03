"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    //  console.log(response.data);
    //as interface to check data and fields 
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(ID, title, completed);
});
//add type annotation
var logTodo = function (ID, title, completed) {
    console.log("ID: " + ID + " \ntitle: " + title + " \ncompleted: " + completed);
};
