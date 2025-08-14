const chartLibrary=(function(){
    var options={
        chartColor:'blue',
        network:{timeout:5000,retryPolicy:{attempts:3,delay:100},lastUpdated:new Date()}
    }
    
    console.log(`Chart library loaded. Color is: ${options.chartColor}`)
    function draw(){
        console.log(`Drawing a chart with color: ${options.chartColor}`)
    }
    function getChartColor(){
        return options.chartColor;
    }

    function getNetworkConfig(){
        // const clone={...options.network}
        // const clone=JSON.stringify(options.network)
        // return JSON.parse(clone);
        return structuredClone(options.network)
    }
    function logInternalState(){
        console.log("Logging the internal state",options)
    }
    return {getChartColor,draw,getNetworkConfig,logInternalState};
})();
(function(){  
    var options={
        rowsPerPage:20
    }
})();
console.log(`Main app: Trying to create a chart with color: ${chartLibrary.getChartColor()}`)
chartLibrary.draw()
chartLibrary.logInternalState()
const myConfig=chartLibrary.getNetworkConfig()
console.log("checking the typeof",typeof myConfig)
console.log("logging the myconfig lastupadted",myConfig.lastUpdated.getFullYear())
console.log("checking the type fo the last udpated",typeof myConfig.lastUpdated)
myConfig.timeout=999;
myConfig.retryPolicy.attempts=99;
chartLibrary.logInternalState()