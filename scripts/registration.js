import {fetchUsers} from '../utils/fetchUsers.js';

let users = await fetchUsers();
console.log(users);