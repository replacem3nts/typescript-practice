import { match } from 'assert';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.htmlWinsAnalysis('Tottenham');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
