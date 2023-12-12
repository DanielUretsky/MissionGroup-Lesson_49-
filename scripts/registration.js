import { fetchUsers } from '../utils/fetchUsers.js';
import { User } from '../utils/userModel.js';

let users = await fetchUsers();
console.log(users);
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailNameInput = document.getElementById("email");
const passwordNameInput = document.getElementById("password");

const registrationButton = document.getElementById("regsitrationBtn");
const errorMessageSpan = document.getElementById("errorMessage");

const registrationHandler = () => {
    if (firstNameInput.value !== "" &&
        lastNameInput.value !== "" &&
        emailNameInput.value !== "" &&
        passwordNameInput.value !== ""
    ) {
        for (let x in users) {
            const userObj = users[x];
            if (emailNameInput.value === userObj.email) {
                errorMessageSpan.textContent = "User is already exists";
                firstNameInput.value = "";
                lastNameInput.value = "";
                emailNameInput.value = "";
                passwordNameInput.value = "";
                break;
            }
            
            if(emailNameInput.value !== userObj.email && users.length - 1 == x ) {
                const user = new User(users.length + 1, firstNameInput.value, lastNameInput.value, emailNameInput.value, passwordNameInput.value, "../assets/icons/user.png", true);
                users.push(user);
                localStorage.setItem("users", JSON.stringify(users));
                window.location.href = "../pages/login.html";
                break;
            }
        }

    } else {
        errorMessageSpan.textContent = "All inputs are required!";
    }
}





registrationButton.addEventListener("click", registrationHandler);

