class User{
    firstName;
    lastName;

    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName(){
        return this.firstName+' '+this.lastName;
    }

    static createFromApiData(userData){
        // return new User(userData.fName,userData.lName)
        return new this(userData.fName,userData.lName)
    }
}

class Admin extends User{
    constructor(firstName,lastName){
        super(firstName,lastName);
    }

    canBanUser(){
        return true;
    }

    getFullName(){
        // First, call the parent's version of getFullName to get the base logic.
        const baseFullName = super.getFullName();
        // Then, add the specialized formatting for the Admin.
        return `${baseFullName} (Admin)`;
    }
}

const AliceUser=new User('Alice','Black');
console.log(AliceUser.getFullName())
const newUser=User.createFromApiData({fName:'Chalie',lName:'Day'})
console.log(newUser.getFullName())
const adminUser=new Admin('Balic','Clack');
console.log(adminUser.getFullName()); // Now works correctly
console.log(adminUser.canBanUser()); // Accesses its own method