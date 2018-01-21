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
	for(let i=0; i<101; i++){
		doorsOpen[i] = false
	}

	for(let k=1; k<=50; k++){
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