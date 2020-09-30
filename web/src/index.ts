import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Bojangles', age: 165 });
const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();
