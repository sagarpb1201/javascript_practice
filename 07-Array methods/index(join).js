const alertTags = ['database', 'high-latency', 'region:us-east-1'];

function formatTagsForDisplay(tags) {
    // Join all the elements with a comma and a space
    const joinedTags = tags.join(', ');
    // Add the prefix using a template literal for clarity
    return `Tags: ${joinedTags}`;
}

console.log(formatTagsForDisplay(alertTags));