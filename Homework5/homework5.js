main = function() {
	
	chalk.println('Dylan Herrig');
	chalk.println('EECS 368 HW4');
	chalk.println('----------------------');
    guesser();
}

function guesser()
{
    var x = Math.floor(Math.random()*10);

    var y = Math.floor(Math.random()*10);

    var ans = x+y;

	chalk.println("What is " + x + " + " + y+ "?");
	
	var sol = chalk.entrybox();
	
	sol.then(
		function(enter){
				if(parseInt(enter) == ans)
				{
					chalk.println("Correct. You win a cookie! And another go...");
					guesser();		
				}
				else
				{
					chalk.println("Wrong! Try again!");
					guesser();
				}
		},
		function(reject){
			chalk.println("You Escaped! Try again!");
			guesser();			
		}
			
			
	);

    

} 
    
    
    
    


