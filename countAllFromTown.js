function countAllFromTown(reg, regTown){
	let count = 0;
  	
  	let regArr = reg.split(",");
  	for(let i in regArr){
    	let trimmed = regArr[i].trim();
      	if(trimmed.startsWith(regTown)){
        	count += 1;
        }
    }
	return count;
}

export default countAllFromTown;