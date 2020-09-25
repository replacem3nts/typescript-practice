"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
console.log(reader.data[0][0]);
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === "H" /* HomeWin */) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === "A" /* AwayWin */) {
        manUnitedWins++;
    }
}
console.log("Man United has won " + manUnitedWins + " games");
