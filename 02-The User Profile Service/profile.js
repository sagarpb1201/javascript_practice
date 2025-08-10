function displayUserProfile(user){
    console.log('Middle Name:', user.middleName)
    console.log('Profile Picture:', user.profilePictureUrl)
//     let middleNameToDisplay;
// if (user.middleName != null && user.middleName !== "") {
//     middleNameToDisplay = user.middleName;
// } else {
//     middleNameToDisplay = 'N/A';
// }
console.log(`Firstname: ${user.firstName}, Middlename: ${user.middleName??'N/A'}, Lastname: ${user.lastName}`);

}
const currentUser={
    firstName:'Sagar',
    middleName:null,
    lastName:'Biradar'
}

const userWithNoProfilePic={
    firstName:'s',
    lastName:'b',
}
const userWithProfilePic={
    firstName:'A',
    middleName:'',
    lastName:'C',
}

displayUserProfile(currentUser)
displayUserProfile(userWithNoProfilePic)
displayUserProfile(userWithProfilePic)