// function log(message){
//     const enrichedMessage=addTimestamp(message);
//     console.log(enrichedMessage);
// }

// const addTimestamp=(text)=>{
//     const date=new Date().toISOString();
//     return `[${date}] ${text}`;
// }
// log('User logged in.')

function createLogger(level){
    let count=0;
    return function(message){
        count++;
        const date=new Date().toLocaleString();
        console.log(`[${date}]: [${level}]: ${message} ${count}`)
    }
}

const logInfo=createLogger('INFO')
const logWarn=createLogger('WARN')
logInfo("User logged in again")
logInfo("User logged in for second time")
logWarn('There is an issue in the code')
logWarn('There is an issue in the code 2')
logWarn('There is an issue in the code 3')