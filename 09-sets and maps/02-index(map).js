const user1 = { id: 101, name: 'Alice' };
const user2 = { id: 102, name: 'Bob' };

const sessionCache=new Map();
sessionCache.set(user1,{sessionId:'abc'});
sessionCache.set(user2,{sessionId:'def'})
console.log(sessionCache)

if(sessionCache.has(user1)){
    console.log(sessionCache.get(user1))
}

// sessionCache.delete(user1)
// console.log(sessionCache)

console.log("--- Iterating over [key, value] pairs (default) ---");
// The default iterator for a Map yields a [key, value] array on each iteration.
// Using array destructuring `[key, value]` is the cleanest way to access them.
for(const [key, value] of sessionCache){
    console.log("Key:", key, "Value:", value);
}

console.log("\n--- Iterating over keys only ---");
// The .keys() method returns an iterator for just the keys.
for (const user of sessionCache.keys()) {
    console.log("Active User:", user.name);
}

console.log("\n--- Iterating over values only ---");
// The .values() method returns an iterator for just the values.
for (const sessionData of sessionCache.values()) {
    console.log("Session ID:", sessionData.sessionId);
}