import { Sorter } from './Sorter';
import { NumbersCollection } from './Numbers';

const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
