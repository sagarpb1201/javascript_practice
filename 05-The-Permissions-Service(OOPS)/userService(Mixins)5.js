function canEditContent(){
    return true;
}

function canResetPasswords(){
    return true;
}

function applyMixins(targetClass,capabilities){
    capabilities.forEach(element=>{
        targetClass.prototype[element.name]=element;
    })
}

class User{
    name;
    role;
    constructor(name,role){
        this.name=name;
        this.role=role;
    }
}

class Admin extends User{
    constructor(name){
        super(name,'Admin')
    }
}

class SupportAgent extends User{
    constructor(name){
        super(name,'SupportAgent')
    }
}

class SuperAdmin extends User{
    constructor(name){
        super(name, 'SuperAdmin');
    }
}

applyMixins(Admin,[canEditContent]);
applyMixins(SupportAgent,[canResetPasswords])
applyMixins(SuperAdmin,[canEditContent,canResetPasswords])
const adminUser=new Admin('Alice');
const supportAgent=new SupportAgent('Balice');
const superAdmin=new SuperAdmin('Calice');

console.log('--- Testing Admin (Alice) ---');
console.log('Can edit content?', 'canEditContent' in adminUser ? adminUser.canEditContent() : 'No');
console.log('Can reset passwords?', 'canResetPasswords' in adminUser ? adminUser.canResetPasswords() : 'No');

console.log('\n--- Testing Support Agent (Balice) ---');
console.log('Can edit content?', 'canEditContent' in supportAgent ? supportAgent.canEditContent() : 'No');
console.log('Can reset passwords?', 'canResetPasswords' in supportAgent ? supportAgent.canResetPasswords() : 'No');

console.log('\n--- Testing Super Admin (Calice) ---');
console.log('Can edit content?', 'canEditContent' in superAdmin ? superAdmin.canEditContent() : 'No');
console.log('Can reset passwords?', 'canResetPasswords' in superAdmin ? superAdmin.canResetPasswords() : 'No');