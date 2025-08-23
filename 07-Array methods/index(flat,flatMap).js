const usersWithPosts = [
    {
        id: 101,
        name: 'Alice',
        posts: [
            { postId: 901, text: 'Loving the new features!' },
            { postId: 902, text: 'Just deployed a new build.' }
        ]
    },
    {
        id: 102,
        name: 'Bob',
        posts: [
            { postId: 903, text: 'Thinking about system design.' }
        ]
    },
    {
        id: 103,
        name: 'Charlie',
        posts: [] // Charlie hasn't posted yet
    }
];

function getAllPosts(users){
    // const allPosts=[];
    // users.map(user=>{
    //     user.posts.forEach(post=>{
    //         allPosts.push(post)
    //     })
    // })
    // const allPosts=users.map(user=>user.posts)
    // console.log(allPosts.flat())
    // console.log(allPosts)
    console.log(users.flatMap(user=>user.posts))
}

getAllPosts(usersWithPosts)
