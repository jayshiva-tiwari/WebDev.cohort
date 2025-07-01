// You just need to implement the trafficLightAction function
// Return "Stop", "Slow Down", or "Go" based on the traffic light color
function trafficLightAction(color) {
        if( color == "red"){
            console.log("stop");
        }
        else if(color == "yellow"){
            console.log("slow down");
            
        }
        else if(color == "green"){
            console.log("go");
        }
        else{
            console.log("Invalid color");
        }
}

trafficLightAction("red");