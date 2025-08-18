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

fetchUser("alice123")
.then(user=>{console.log("fetched user",user); return fetchPosts(user.id)})
.then(posts=>{console.log("fetched posts",posts); return fetchComments(posts[0].postId)})
.then(comments=>console.log("Fetched comments",comments))
.catch(error=>{console.log("error",error)});
