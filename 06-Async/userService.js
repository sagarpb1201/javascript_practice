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

function fetchNewsFeed(userId) {
    console.log(`Fetching news feed for user: ${userId}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve([{ id: 1, headline: 'Promises are powerful!' }]);
            } else {
                reject(new Error('News Feed API is down'));
            }
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
        const [userResult, settingsResult, newsResult] = await Promise.allSettled([
            fetchUser(userId),
            fetchAccountSettings(userId),
            fetchNewsFeed(userId)
        ]);

        const results = {
            user: userResult.status === 'fulfilled' ? userResult.value : { error: userResult.reason.message },
            settings: settingsResult.status === 'fulfilled' ? settingsResult.value : 
            { error: settingsResult.reason.message },
            news: newsResult.status === 'fulfilled' ? newsResult.value : { error: newsResult.reason.message }
        };

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
