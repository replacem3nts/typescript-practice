import { read } from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(reader);
matchReader.load();

// console.log(matchReader.matches);

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United has won ${manUnitedWins} games`);
