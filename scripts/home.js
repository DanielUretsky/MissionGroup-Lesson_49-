import { User } from "../utils/userModel.js";

// Raz, your mission: 
// 1. write function logout whats redirect user to login page on button click 
//    the button name is userLogoutImage, the variable on Line 30.
//    this function also should to remove loggedUser localStorage
// 2. Write code which checks if user is logged in,
//    if no redirect this user to login or registration page(your choice)


// Gets all users from localStorage
// DATA
const usersFromLocalStorage = JSON.parse(localStorage.getItem("users"));
console.log(usersFromLocalStorage);

//HTML ELEMENTS
const userContainerDiv = document.getElementById("userContainer");
const toolsContainerDiv = document.getElementById("toolsContainer");
const usersCardsContainerDiv = document.getElementById("usersCardContainer");

const userMenuImage = document.getElementById("userMenu");
const toolsArrowToggleImage = document.getElementById("toolsArrowToggle");

const userEditContainerDiv = document.createElement("div");
const userEditParagraph = document.createElement("p");
const userEditImage = document.createElement("img");

const userLogoutContainerDiv = document.createElement("div");
const userLogoutParagraph = document.createElement("p");
const userLogoutImage = document.createElement("img");

//userContainer flag
let isDropDownMenuOpen = false;
let isMenuToolsOpen = false;

//Open user menu
const userDropDownMenuHandler = () => {
    // the value of this flag will be the opposite of its first value each time the function is run
    // for example: first value is false (line 27)
    // when the function is running isDropDownMenuOpen = !isDropDownMenuOpen - output: true
    isDropDownMenuOpen = !isDropDownMenuOpen;

    userEditContainerDiv.classList.add("user-container__edit");
    userLogoutContainerDiv.classList.add("user-container__logout");

    userEditParagraph.textContent = "Edit Profile";
    userLogoutParagraph.textContent = "Logout";

    userEditImage.src = "../assets/icons/editing.png";
    userLogoutImage.src = "../assets/icons/logout.png";

    userEditContainerDiv.append(userEditImage);
    userEditContainerDiv.append(userEditParagraph);

    userLogoutContainerDiv.append(userLogoutImage);
    userLogoutContainerDiv.append(userLogoutParagraph);
    
    // if our flag is true change the height of container and add to him two elements
    // it will look like a drop-down menu
    if(isDropDownMenuOpen) {
        userContainerDiv.style.height = "140px";
     
        userContainerDiv.append(userEditContainerDiv);
        userContainerDiv.append(userLogoutContainerDiv);
    }
    else {
        userEditContainerDiv.remove();
        userLogoutContainerDiv.remove();
        userContainerDiv.style.height = "40px";
        userContainerDiv.style.boxShadow = "none";
    }
}

const userToolsHandler = () => {
    isMenuToolsOpen = !isMenuToolsOpen;

    if(isMenuToolsOpen) {
        toolsContainerDiv.style.height = '280px';
        toolsArrowToggleImage.style.transform = "rotate(180deg)";
    } 
    else {
        toolsContainerDiv.style.height = '40px';
        toolsArrowToggleImage.style.transform = "rotate(0)";
    }
}

function showUsers(usersArr) {
    usersCardsContainerDiv.innerHTML = "";

    for(let x in usersArr) {
        const userObj = usersArr[x];
        
        const cardDiv = document.createElement("div");

        const cardDivHeader = document.createElement("div");
        const cardDivHeaderRight = document.createElement("div");
        const cardHeaderRightInitialsParagraph = document.createElement("p");
        const cardHeaderRightEmailParagraph = document.createElement("p");

        const cardDivBody = document.createElement("div");

        const cardUserImage = document.createElement("img");

        cardHeaderRightInitialsParagraph.textContent = `${userObj.firstName} ${userObj.lastName}`;
        cardHeaderRightEmailParagraph.textContent = `${userObj.email}`;

        cardUserImage.src = userObj.image;

        cardDiv.classList.add("card");

        cardDivHeader.classList.add("card__header");
        cardDivHeaderRight.classList.add("card__header--right");
        cardHeaderRightInitialsParagraph.classList.add("user-initials");
        cardHeaderRightEmailParagraph.classList.add("user-email");

        cardDivBody.classList.add("card__body");



        
        cardUserImage.classList.add("user-avatar")

        cardDivHeaderRight.append(cardHeaderRightInitialsParagraph);
        cardDivHeaderRight.append(cardHeaderRightEmailParagraph);

        cardDivHeader.append(cardUserImage);
        cardDivHeader.append(cardDivHeaderRight);

        cardDiv.append(cardDivHeader);
        cardDiv.append(cardDivBody);

        usersCardsContainerDiv.append(cardDiv);
    }
}

showUsers(usersFromLocalStorage)
userMenuImage.addEventListener("click", userDropDownMenuHandler);
toolsArrowToggleImage.addEventListener("click", userToolsHandler)