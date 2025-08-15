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
        return this.role=="Admin"
    }
}

class ContentContributor extends User{
    constructor(name,role){
        if (new.target === ContentContributor) {
            throw new Error("Can't create a new instance for an abstract class")
        }
        super(name,role)
    }
    canEditContent(){
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

class SupportAgent extends Viewer{
    constructor(name){
        super(name)
    }

    canResetPasswords(){
        return this.role=="Viewer"
    }
}

const adminUser=new User('Alice','Admin')
const editUser=new User('Bob','Editor')

const newAdminUser=new Admin('Git');

// This line will now correctly throw an error, protecting our architecture.
// const testEditor = new ContentContributor('Test', 'Admin');

const supportAgent=new SupportAgent('Glob');
console.log(supportAgent.canResetPasswords())
