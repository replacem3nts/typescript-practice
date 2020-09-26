import { User } from './models/User';

const user = new User({ name: 'Dan', age: 14 });

user.set({ age: 105 });

console.log(user.get('name'));
console.log(user.get('age'));
