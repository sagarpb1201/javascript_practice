// const adminUser={
//     name:'Alice',
//     role:'Admin',
//     canEditContent(){
//         console.log(this)
//         return this.role=="Admin";
//     }
// }
// console.log(adminUser.canEditContent())

class User{
    name;
    role;

    constructor(name,role){
        this.name=name;
        this.role=role;
    }
    canEditContent(){
        console.log("calling from user class")
        return this.role=="Admin"
    }
}

class Admin extends User{
    constructor(name){
        super(name,'Admin')
    }

    canEditContent(){
        console.log("calling from admin class")
        return true;
    }
}

class Editor extends User{
    constructor(name){
        super(name,'Editor')
    }

    canEditContent(){
        return true;
    }
}

class Viewer extends User{
    constructor(name){
        super(name,'Viewer')
    }

    canEditContent(){
        return false;
    }
}

const adminUser=new User('Alice','Admin')
console.log("for adminUser",adminUser.canEditContent())
const editUser=new User('Bob','Editor')
console.log("for editUser",editUser.canEditContent())

const newAdminUser=new Admin('Git');
console.log("for newAdminUser",newAdminUser.canEditContent())