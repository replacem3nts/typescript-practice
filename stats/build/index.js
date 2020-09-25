"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(reader);
matchReader.load();
// console.log(matchReader.matches);
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === "H" /* HomeWin */) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === "A" /* AwayWin */) {
        manUnitedWins++;
    }
}
console.log("Man United has won " + manUnitedWins + " games");
