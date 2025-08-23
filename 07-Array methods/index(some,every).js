const rawUsers = [
    { id: 101, name: 'Alice', status: 'active', plan: 'premium' },
    { id: 102, name: 'Bob', status: 'inactive', plan: 'basic' },
    { id: 103, name: 'Charlie', status: 'active', plan: 'basic' },
    { id: 104, name: 'Diana', status: 'active', plan: 'premium' }
];

function hasInactiveUsers(users){
    // if(users.filter(user=>user.status=="inactive").length>0){
    //     return true;
    // }
    // return false;
    return users.some(user=>user.status=="inactive")
}

function areAllUsersActive(users){
    // if(users.filter(user=>user.status=="active").length==rawUsers.length){
    //     return true;
    // }else{
    //     return false;
    // }
    return users.every(user=>user.status=="active");
}

console.log(hasInactiveUsers(rawUsers))
console.log(areAllUsersActive(rawUsers))