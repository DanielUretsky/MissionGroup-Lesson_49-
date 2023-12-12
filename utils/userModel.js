export class User {
    constructor(id, firstname, lastname, email, password, image, isAdmin) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.image = image;
        this.isAdmin = isAdmin;
    }
}