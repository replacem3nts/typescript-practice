import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 30, -5, 0, -7]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ZeBrAstRipes');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);
