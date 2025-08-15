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

class ContentContributor extends User{
    constructor(name,role){
        if(new.target === ContentContributor){
            throw new Error("Can't create a new instance for an abstract class")
        }
        super(name,role)
    }
    canEditContent(){
        console.log("calling from admin class")
        return true;
    }
}

class Admin extends ContentContributor{
    constructor(name){
        super(name,'Admin')
    }
}

class Editor extends ContentContributor{
    constructor(name){
        super(name,'Editor')
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

// This line will now correctly throw an error, protecting our architecture.
// const testEditor = new ContentContributor('Test', 'Admin');
// console.log("test editor", testEditor);