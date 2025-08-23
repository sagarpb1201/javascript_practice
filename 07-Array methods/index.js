const comments = ['Great article!', 'I disagree...', 'This is just spam.', 'Thanks for sharing!'];

// const result=comments.splice(2,0,'This is a neutral comment');
// console.log(result)
// console.log(comments)

function removeElementAtIndex(array,index){
    const part1=array.slice(0,index);
    const part2=array.slice(index+1);
    console.log(part1,part2)
    return [...part1,...part2]
}

function replaceElementAtIndex(array,index,newValue){
    const part1=array.slice(0,index);
    const part2=array.slice(index+1);
    return [...part1,newValue,...part2]
}

// console.log(removeElementAtIndex(comments,2))
console.log(replaceElementAtIndex(comments,2,'test'))