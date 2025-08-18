function fetchUser(userId) {
  console.log("Fetching user...");
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const user = { id: userId, name: "Alex", role: "Admin" };
      console.log("...user found.");
      if(userId=='baduser'){
        reject(new Error('User not found in posts database'))
      }
      resolve(user);
    }, 1000);
  });
}

function fetchPosts(userId) {
  console.log(`Fetching posts for user: ${userId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = [
        { postId: 1, content: "Hello World" },
        { postId: 2, content: "Callback patterns" },
      ];
      console.log("...Posts found.");
      resolve(posts);
    }, 1000);
  });
}

function fetchComments(postId) {
  console.log(`Fetching comments for post: ${postId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const comments = [
        { commentId: 101, text: "Great post!" },
        { commentId: 102, text: "I agree." },
      ];
      console.log("...Comments found.");
      resolve(comments);
    }, 1000);
  });
}

function fetchAccountSettings(userId){
    console.log("Fetching account settings...")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const accountSettings={ userId, theme: 'dark', language: 'en' }
            if(!userId){
                reject(new Error('Please provice an user id'))
            }else{
                resolve(accountSettings);
            }
        },1000)
    })
}

async function getUserDataWorkflow(){
    try{
        const user=await fetchUser('alice123');
        console.log("Fetched user",user);
        const posts=await fetchPosts(user.id);
        console.log("Fetched posts",posts);
        const comments=await fetchComments(posts[0].postId);
        console.log("comments",comments);
    }catch(error){
        console.error("Error",error);
    }
}

async function getDashboardData(userId){
    try{
        // Start both operations concurrently.
        const userPromise = fetchUser(userId);
        const settingsPromise = fetchAccountSettings(userId);

        // Wait for both of them to complete.
        const results = await Promise.all([userPromise, settingsPromise]);
        return results;
    }catch(error){
        console.error(error)
    }
}

async function main() {
    await getUserDataWorkflow();
    const dashboardData = await getDashboardData('alice123');
    console.log("dashboard data from result", dashboardData);
}

main();
