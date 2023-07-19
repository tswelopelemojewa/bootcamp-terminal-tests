function countRegNumber(reg) {
	const splitter = reg.split(",");
	console.log(splitter);
	const count = splitter.length;
	return (splitter, count)
}

export default countRegNumber;

