const http = require("http");

const SECRET = "CIGAR"; 

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);


	const GUESS = req.url.split("?q=")[1]; // Write logic to parse the word which the user guessed from the URL string
	let ans = ""; // Write logic to compare the word with the secret, and generate the feedback string
	let guess_word = SECRET.split("");
	if (GUESS.length != 5){
		res.end("Word should be of 5 letters");
	}
	
	
	
	
	
	
	
	
	
	
	else{
		for(var i=0;i<5;i++){
			
			
			if(GUESS[i]===SECRET[i]){
			
				ans = ans + "y"}
			else if (guess_word.includes(GUESS[i])){
				
				ans = ans + "g"}
			else{
				
				ans = ans + "b"}
		}
	}
	

	
	
	
	
	res.end(ans);
}








http.createServer(myFunction).listen(8080);

