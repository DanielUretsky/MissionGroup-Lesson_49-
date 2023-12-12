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
const loggedUser = JSON.parse(localStorage.getItem("Current_User"));

console.log(usersFromLocalStorage);

//HTML ELEMENTS
const userContainerDiv = document.getElementById("userContainer");
const usersCardsContainerDiv = document.getElementById("usersCardsContainer");
const userMenuImage = document.getElementById("userMenu");

const userInitialsSpan = document.getElementById("userInitials");

const userEditContainerDiv = document.createElement("div");
const userEditParagraph = document.createElement("p");
const userEditImage = document.createElement("img");

const userLogoutContainerDiv = document.createElement("div");
const userLogoutParagraph = document.createElement("p");
const userLogoutImage = document.createElement("img");

//userContainer flag
let isDropDownMenuOpen = false;


userInitialsSpan.textContent = `${loggedUser.firstname} ${loggedUser.lastname}`;

if (loggedUser.image) {
    userMenuImage.src = loggedUser.image;
    userMenuImage.style.borderRadius = '50%';
    userMenuImage.style.border = '1px solid white';
    userMenuImage.style.width = '30px';
    userMenuImage.style.height = '30px';
}

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
    if (isDropDownMenuOpen) {
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

const cardToggleHandler = (objState, cardDiv, cardToggleImage) => {
    objState.cardOpen = !objState.cardOpen;

    if (objState.cardOpen) {

        cardDiv.style.height = '140px';
        cardToggleImage.style.transform = 'rotate(180deg)';

    }
    else {
        cardDiv.style.height = '60px';
        cardToggleImage.style.transform = 'rotate(0deg)';

    }
}

const editUserHandler = () => {

}



function showUsers(usersArr) {
    const usersCounterSpan = document.getElementById("usersCount");
    const malesCounterSpan = document.getElementById("malesCount");
    const femalesCounterSpan = document.getElementById("femalesCount");
    const averageAgeCounterSpan = document.getElementById("averageAgeCount");


    let malesCounter = 0;
    let femalesCounter = 0;
    let sumAge = 0;

    let jobsArray = [];


    usersCardsContainerDiv.innerHTML = "";

    for (let x in usersArr) {
        const userObj = usersArr[x];

        if (!userObj.isAdmin) {


            const cardDiv = document.createElement("div");
            const cardToggleImage = document.createElement("img");

            const cardHeaderDiv = document.createElement("div");

            const cardBodyDiv = document.createElement("div");
            const cardBodyMoreInfoDiv = document.createElement("div");
            const cardBodyMoreProfessionInfoDiv = document.createElement("div");

            const moreInfoPhoneSpan = document.createElement("span");
            const moreInfoGenderSpan = document.createElement("span");
            const moreInfoAgeSpan = document.createElement("span");

            const moreProfessionInfoAdressSpan = document.createElement("span");
            const moreProfessionInfoCitySpan = document.createElement("span");

            const cardUserIdentificationDiv = document.createElement("div");
            const identificationImage = document.createElement("img");
            const identificationInfoDiv = document.createElement("div");
            const identificationInitialsSpan = document.createElement("span");
            const identificationEmailSpan = document.createElement("span");

            const cardUserProfessionDiv = document.createElement("div");
            const professionSpan = document.createElement("span");

            const cardUserPositionDiv = document.createElement("div");
            const positionSpan = document.createElement("span");

            const objState = {
                cardOpen: false,
            }

            if (userObj.gender === "male") {
                malesCounter++;
                malesCounterSpan.textContent = `males: ${malesCounter}`
            }
            else if (userObj.gender === "female") {
                femalesCounter++;
                femalesCounterSpan.textContent = `females: ${femalesCounter}`
            }

            sumAge += userObj.age;
            jobsArray.push(userObj.profession.department);

            cardToggleImage.src = "../assets/icons/up-down-arrow.png";

            identificationInitialsSpan.textContent = `${userObj.firstName} ${userObj.lastName}`;
            identificationEmailSpan.textContent = userObj.email;
            identificationImage.src = userObj.image;

            professionSpan.textContent = userObj.profession.department;

            positionSpan.textContent = userObj.profession.position + userObj.profession.position;

            moreInfoPhoneSpan.innerHTML = `phone: <span style="color: rgb(195, 195, 195)">${userObj.phone}</span>`;
            moreInfoGenderSpan.innerHTML = `gender: <span style="color: rgb(195, 195, 195)">${userObj.gender}</span>`;
            moreInfoAgeSpan.innerHTML = `age: <span style="color: rgb(195, 195, 195)">${userObj.age}</span>`;
            moreProfessionInfoAdressSpan.innerHTML = `address: <span style="color: rgb(195, 195, 195)">${userObj.companyAddress.adress}</span>`;
            moreProfessionInfoCitySpan.innerHTML = `city: <span style="color: rgb(195, 195, 195)">${userObj.companyAddress.city}</span>`;


            cardDiv.classList.add("card");
            cardToggleImage.classList.add("card-toggle");
            cardHeaderDiv.classList.add("card__header");

            cardBodyDiv.classList.add("card__body");
            cardBodyMoreInfoDiv.classList.add("more-info");
            cardBodyMoreProfessionInfoDiv.classList.add("more-profession-info");

            cardUserIdentificationDiv.classList.add("initials");
            identificationInfoDiv.classList.add("initials__info");
            identificationEmailSpan.classList.add("card-email");

            cardUserProfessionDiv.classList.add("profession");

            cardUserPositionDiv.classList.add("position");

            cardUserIdentificationDiv.append(identificationImage);
            identificationInfoDiv.append(identificationInitialsSpan);
            identificationInfoDiv.append(identificationEmailSpan);
            cardUserIdentificationDiv.append(identificationInfoDiv);

            cardUserProfessionDiv.append(professionSpan);

            cardUserPositionDiv.append(positionSpan);

            cardHeaderDiv.append(cardUserIdentificationDiv);
            cardHeaderDiv.append(cardUserProfessionDiv);
            cardHeaderDiv.append(cardUserPositionDiv);

            cardBodyMoreInfoDiv.append(moreInfoPhoneSpan);
            cardBodyMoreInfoDiv.append(moreInfoGenderSpan);
            cardBodyMoreInfoDiv.append(moreInfoAgeSpan);
            cardBodyMoreProfessionInfoDiv.append(moreProfessionInfoAdressSpan);
            cardBodyMoreProfessionInfoDiv.append(moreProfessionInfoCitySpan);

            cardBodyDiv.append(cardBodyMoreInfoDiv);
            cardBodyDiv.append(cardBodyMoreProfessionInfoDiv);

            cardDiv.append(cardToggleImage);
            cardDiv.append(cardHeaderDiv);
            cardDiv.append(cardBodyDiv);
            cardDiv.append(cardBodyDiv);

            usersCardsContainerDiv.append(cardDiv);

            cardToggleImage.addEventListener("click", () => cardToggleHandler(objState, cardDiv, cardToggleImage));
        }
    }

    usersCounterSpan.textContent = `users: ${usersArr.length}`;
    averageAgeCounterSpan.textContent = `avg. age: ${Math.round(sumAge / usersArr.length)}`
    console.log('maels', sumAge);
    console.log('females', femalesCounter);
    console.log('jobs', jobsArray);

}

showUsers(usersFromLocalStorage)
userMenuImage.addEventListener("click", userDropDownMenuHandler);
userEditImage.addEventListener("click", editUserHandler);
