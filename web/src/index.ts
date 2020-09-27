import { User } from './models/User';

const user = new User({ name: 'John', age: 22 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
