function canEditContent(){
    return true;
}

function canResetPasswords(){
    return true;
}

function createUser(name,role,capabilities){
    const user={
        name:name,
        role:role,
    }
    capabilities.forEach(element => {
            user[element.name]=element
    });
    return user;
}

const viewer=createUser('Alice','Viewer',[])
const admin=createUser('Balice','Admin',[canEditContent])
const supportAgent=createUser('Calice','SupportAgent',[canResetPasswords])
const superAdmin=createUser('Dalice','SuperAdmin',[canEditContent,canResetPasswords])

console.log('--- Testing Viewer ---');
console.log('Can edit content?', viewer.canEditContent ? viewer.canEditContent() : 'No');

console.log('\n--- Testing Admin ---');
console.log('Can edit content?', admin.canEditContent ? admin.canEditContent() : 'No');
console.log('Can reset passwords?', admin.canResetPasswords ? admin.canResetPasswords() : 'No');

console.log('\n--- Testing Super Admin ---');
console.log('Can edit content?', superAdmin.canEditContent ? superAdmin.canEditContent() : 'No');
console.log('Can reset passwords?', superAdmin.canResetPasswords ? superAdmin.canResetPasswords() : 'No');