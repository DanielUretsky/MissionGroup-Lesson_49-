import { fetchUsers } from "../utils/fetchUsers.js";

let usersArr=[];

///varibales
fetchUsers().then((data)=>{
    usersArr.push(...data);
    console.log("line 8 ",usersArr);

})


console.log("line 13 ",usersArr);
