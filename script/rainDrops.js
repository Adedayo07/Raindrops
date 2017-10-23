module.exports = {
	rainDrops: function(input) {
	if(typeof(input) === "number"){
		let response = ""
		if(input % 3 === 0) {
			response+="Pling"
		}
		if(input % 5 === 0) {
			response += "Plang"
		}
		if(input % 7 === 0) {
			response += "Plong"
		}
		if(input % 3 !== 0 && input % 5 !== 0 && input % 7 !== 0) {
			response += input
		}
		return response
	}
	return "Please enter a number"
	}
}