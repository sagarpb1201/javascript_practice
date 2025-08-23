const userPermissions = ['edit_posts', 'delete_users', 'view_analytics'];

function hasPermission(userPermissions,requiredPermission){
    // return userPermissions.some(permission=>permission==requiredPermission)
    return userPermissions.includes(requiredPermission)
}

console.log(hasPermission(userPermissions,'delete_users'))
console.log(hasPermission(userPermissions,'delete_usesrs'))