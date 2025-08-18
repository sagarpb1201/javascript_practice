// --- The Reusable, Single-Responsibility Functions ---

function fetchUser(userId, callback) {
    console.log('Fetching user...');
    setTimeout(() => {
        const user = { id: userId, name: 'Alice', role: 'Admin' };
        console.log('...User found.');
        callback(user);
    }, 1000);
}

function fetchPosts(userId, callback) {
    console.log(`Fetching posts for user: ${userId}`);
    setTimeout(() => {
        const posts = [
            { postId: 1, content: 'Hello World' },
            { postId: 2, content: 'Callback patterns' }
        ];
        console.log('...Posts found.');
        callback(posts);
    }, 1000);
}

function fetchComments(postId, callback) {
    console.log(`Fetching comments for post: ${postId}`);
    setTimeout(() => {
        const comments = [
            { commentId: 101, text: 'Great post!' },
            { commentId: 102, text: 'I agree.' }
        ];
        console.log('...Comments found.');
        callback(comments);
    }, 1000);
}


// --- Chaining the operations together ---

fetchUser('alice123', (user) => {
    console.log('--- User Data ---');
    console.log(user);

    fetchPosts(user.id, (posts) => {
        console.log('--- Post Data ---');
        console.log(posts);

        const latestPost = posts[0];
        fetchComments(latestPost.postId, (comments) => {
            console.log('--- Comment Data ---');
            console.log(comments);
            console.log('\nAll operations complete.');
        });
    });
});
