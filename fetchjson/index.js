"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/100';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
