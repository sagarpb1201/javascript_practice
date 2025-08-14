// const adminUser={
//     name:'Alice',
//     role:'Admin',
//     canEditContent(){
//         console.log(this)
//         return this.role=="Admin";
//     }
// }
// console.log(adminUser.canEditContent())

const userMethods={
    canEditContent(){
        return this.role=="Admin"
    }
}

function User(name,role){
    this.name=name;
    this.role=role;
}
console.log(User.prototype)
User.prototype=userMethods;

const adminUser=new User('Alice','Admin')
console.log(adminUser.canEditContent())
const editUser=new User('Bob','Editor')
console.log(editUser.canEditContent())