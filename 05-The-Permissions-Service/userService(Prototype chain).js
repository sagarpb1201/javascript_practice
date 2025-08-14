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

function createUser(name,role){
    const newObj=Object.create(userMethods)
    newObj.name=name;
    newObj.role=role;
    return newObj;
}

const adminUser=createUser('Alice','Admin')
console.log(adminUser.canEditContent())
const editUser=createUser('Bob','Editor')
console.log(editUser.canEditContent())