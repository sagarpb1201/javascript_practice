const rawUsers = [
    { id: 101, name: 'Alice', status: 'active', plan: 'premium' },
    { id: 102, name: 'Bob', status: 'inactive', plan: 'basic' },
    { id: 103, name: 'Charlie', status: 'active', plan: 'basic' },
    { id: 104, name: 'Diana', status: 'active', plan: 'premium' }
];

const findUserById=(users,id)=>{
    // return users.filter((user)=>user.status=="active" && user.id==id);
    return users.find(user=>user.id==id)
}

console.log(findUserById(rawUsers,101))
console.log(findUserById(rawUsers,1022))