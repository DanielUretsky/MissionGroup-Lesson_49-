export const fetchUsers = async () => {
    const users = new Promise((res) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://dummyjson.com/users", true);

        xhr.onload = function () {
            let data = JSON.parse(this.responseText);
            data = data.users;
            let usersData = [];

            for (let x in data) {
                let dataObj = {
                    id: data[x].id,
                    firstName: data[x].firstName,
                    lastName: data[x].lastName,
                    password: data[x].password,
                    age: data[x].age,
                    gender: data[x].gender,
                    email: data[x].email,
                    image: data[x].image,
                    phone: data[x].phone,
                    companyAddress: {
                        adress: data[x].company.address.address,
                        city: data[x].company.address.city,
                    },
                    profession: {
                        department: data[x].company.department,
                        position: data[x].company.title
                    }
                };
                usersData.push(dataObj);
            };

            console.log('userData from fetch', usersData);
            if (!localStorage.getItem("users")) {
                localStorage.setItem("users", JSON.stringify(usersData));
            }

            res(usersData);
        }

        xhr.send();
    });

    return users;
}