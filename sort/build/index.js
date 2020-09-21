"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 30, -5, 0, -7]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('ZeBrAstRipes');
var charSorter = new Sorter_1.Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);
