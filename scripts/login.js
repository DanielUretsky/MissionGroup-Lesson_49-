import { fetchUsers } from "../utils/fetchUsers.js";

document.getElementById("LogBtn").addEventListener("click",logIn);

///varibales
let usersArr=[];


///////////////

fetchUsers().then((data)=>{
    usersArr.push(...data);
    // console.log("line 8 ",usersArr);

})


console.log("line 13 ",usersArr);

function logIn(){
let userEmail=document.getElementById("userMail");
let userPass=document.getElementById("pasNum");
console.log(userEmail.value);
console.log(userPass.value);
for(let x in usersArr){
    if(x%4==0)
    {
        
    }
}

}
