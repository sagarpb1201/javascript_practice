const rawUsers = [
    { id: 101, name: 'Alice', status: 'active', plan: 'premium' },
    { id: 102, name: 'Bob', status: 'inactive', plan: 'basic' },
    { id: 103, name: 'Charlie', status: 'active', plan: 'basic' },
    { id: 104, name: 'Diana', status: 'active', plan: 'premium' }
];

const getActiveUserNames=(users)=>{
// users.forEach(user=>{
//     if(user.status=="active")names.push(user.name)
// })
// const result=users.filter(user=>{
//     return user.status=="active";
// })
// const names=result.map(res=>res.name)
// console.log(names)
return users
        .filter(user=>user.status=="active")
        .map(user=>user.name)
}

const getActiveUserPlanCounts=(users)=>{
    // const results={};
    // users.forEach(user=>{
    //     if(user.status=="active"){
    //         if(results[user.plan]){
    //             results[user.plan]++;
    //         }else{
    //             results[user.plan]=1;
    //         }
    //     }
    // })
    // return results;
    // const results=users.reduce((acc,curr)=>{
    //     if(curr.status=="active"){
    //         if(acc[curr.plan]){
    //             acc[curr.plan]++;
    //         }else{
    //             acc[curr.plan]=1
    //         }
    //     }
    //     return acc;
    // },{})
    const results=users
                    .filter(user=>user.status=="active")
                    .reduce((acc,curr)=>{
                        if(acc[curr.plan]){
                            acc[curr.plan]++;
                        }else{
                            acc[curr.plan]=1;
                        }
                        return acc
                    },{})
    return results;
}

console.log(getActiveUserNames(rawUsers))
console.log(getActiveUserPlanCounts(rawUsers))