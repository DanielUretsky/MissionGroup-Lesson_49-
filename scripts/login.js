import { fetchUsers } from "../utils/fetchUsers.js";


///varibales
let usersArr=[];
let userCheck=false;

/////////////// 9uQFF1Lh ___ atuny0@sohu.com
fetchUsers().then((data)=>{
    usersArr.push(...data);

})

console.log("line 13 ",usersArr);

function logIn(){
    let flag=true;
let userEmail=document.getElementById("userMail");
let userPass=document.getElementById("pasNum");
console.log(userEmail.value);
console.log(userPass.value);
for(let x in usersArr){
    if(usersArr[x].email==userEmail.value&&usersArr[x].password==userPass.value)
    {
        let currentUser=usersArr[x];
        localStorage.setItem("Current_User",JSON.stringify(currentUser))
        flag=false;
        window.location.href="../pages/home.html";
        break;

    }
    if(x==usersArr.length-1&&flag==true)
        alert("User not found . Check your details")
    }
}



const backReg= () =>
{
    window.location.href="../pages/registration.html";
}

//BTNs
document.getElementById("LogBtn").addEventListener("click",logIn);
document.getElementById("regBtn").addEventListener("click",backReg);