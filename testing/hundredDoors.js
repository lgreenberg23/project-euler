
function doorsFastest(){
  for (var door = 1; door <= 100; door++) {
    var sqrt = Math.sqrt(door);    
    //if (sqrt === (sqrt | 0)) { 

    	//if the number is actually already a whole integer aka is a sq. rt
    if (sqrt === Math.floor(sqrt)){    
        console.log("Door %d is open", door);  
     }
  }
}


function doors(){
	//initialize doors
	let doorsOpen = []
	for(let i=0; i<101; i++){
		doorsOpen[i] = false
	}
   
   for (let i=1; i<=100; i++){
   	for(let j=1; j<=100; j++){
   		if (j % i === 0){
   			doorsOpen[j] = !doorsOpen[j]
   		}
   	}
   }

}

function doorsFaster(){
	//initialize doors
	let doorsOpen = []
	for(let i=0; i<=100; i++){
		doorsOpen[i] = false
	}

	for(let k=1; k<=100; k++){
		//go through the primes 
		for(let j=1; j<=k; j++){

			//if that prime is a factor of the door number
			if(k % j === 0){
			
				//toggle the door
				doors[k] = !doors[k]
			}
		}
	}
   //print the state of the door
   for(var m=1; m<=50; m++){
     console.log("Door %d is %s",m,doors[m]?true:false)
   }
}