import { User } from './models/User';

const user = new User({ name: 'Dan', age: 14 });

console.log(user.get(name));
console.log(user.get(age));
