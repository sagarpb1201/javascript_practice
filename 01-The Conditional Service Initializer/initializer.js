'use strict'

function deepFreeze(obj){
    Object.freeze(obj);
    for(const val of Object.values(obj)){
        if(typeof val=="object" && val!=null){
            deepFreeze(val)
        }
    }
}

function initializeService(){
    const serviceConfig={
        name:'Production Database',
        host:'prod.db.internal',
        timeouts: {
            read: 3000,
            write: 5000,
            moreTimeouts:{
                test:5000
            }
        }
    }
    // Object.freeze(serviceConfig);
    console.log("keys",Object.keys(serviceConfig))
    console.log("values",Object.values(serviceConfig))
    console.log("entries",Object.entries(serviceConfig))
    console.log(typeof null)

    deepFreeze(serviceConfig)
    
    // serviceConfig.timeouts.read=9999;
    serviceConfig.timeouts.moreTimeouts=9898989

    if(true){
        const serviceConfig={
            name:'Developer Sandbox',
            host:'localhost'
        }
        // console.log(serviceConfig)
    }
    // console.log(serviceConfig)
}

initializeService()