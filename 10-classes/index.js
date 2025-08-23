function canBanUser(){
        return true;
    }

function applyMixins(targetClass,capabilities){
    capabilities.forEach(element => {
        targetClass.prototype[element.name]=element;
    });
}

class User{
    _firstName;
    _lastName;
    _email;

    constructor(firstName,lastName,email){
        this._firstName=firstName;
        this._lastName=lastName;
        this._email=email;
    }

    getFullName(){
        return this._firstName+' '+this._lastName;
    }
    get email(){
        return this._email;
    }

    set email(email){
        this._email=email;
    }

    static createFromApiData(userData){
        // return new User(userData.fName,userData.lName)
        return new this(userData.fName,userData.lName)
    }
}

class Moderator{
    moderatorId;

    constructor(id){
        this.moderatorId=id;
    }
}
applyMixins(Moderator,[canBanUser])

class Admin extends User{
    constructor(firstName,lastName){
        super(firstName,lastName);
    }

    getFullName(){
        // This duplicates the name formatting logic from the parent, which is not ideal for maintenance.
        // return `${this.lastName}, ${this.firstName}(Admin)`
        const baseName = super.getFullName();
        return `${baseName} (Admin)`;
    }
}

applyMixins(Admin,[canBanUser])

const AliceUser=new User('Alice','Black','tsetgmail.com');
console.log(AliceUser.email)
AliceUser.email='testtsetsts';
console.log(AliceUser.getFullName())
const newUser=User.createFromApiData({fName:'Chalie',lName:'Day'})
console.log(newUser.getFullName())
const adminUser=new Admin('Balic','Clack');
console.log(adminUser.getFullName()); // Now works correctly
console.log(adminUser.canBanUser()); // Accesses its own method