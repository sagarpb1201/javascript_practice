const tagsFromMultipleArticles = [
  'javascript', 'performance', 'webdev',
  'javascript', 'es6', 'nodejs',
  'performance', 'caching', 'webdev'
];

function getUniqueTags(tags){
    // const uniqueTags=[];
    // tags.forEach(tag=>{
    //     if(!uniqueTags.includes(tag)){
    //         uniqueTags.push(tag);
    //     }
    // })
    // return uniqueTags;
    const uniqueTags=new Set(tags);

    return [...uniqueTags];
}

console.log(getUniqueTags(tagsFromMultipleArticles))