export const fetchUsers = async () => {
    const users = new Promise((res) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://dummyjson.com/users", true);

        xhr.onload = function() {
            let data = JSON.parse(this.responseText);
            data = data.users;
            let users = data.map(elem => {
                return {
                    firstName: elem.firstName,
                    lastName: elem.lastName,
                    password: elem.password,
                    age: elem.age,
                    gender: elem.gender,
                    email: elem.email,
                    image: elem.image,
                    phone: elem.phone,
                    company: elem.company,
                }
            });
            
            res(users);
        }

        xhr.send();
    });

    return users;
}