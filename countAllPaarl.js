function countAllPaarl(reg){
	let count = 0;
  
 	let regArr = reg.split(",");
  	for(let i in regArr){
		console.log(regArr[i]);
      let trimmed = regArr[i].trim()
      	if(trimmed.startsWith("CJ")){
        	count += 1;
        }
	}
	return count;
}

export default countAllPaarl;