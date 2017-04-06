main = function() {
	chalk.println("Hello, this is where a variable would be imputed.");
	chalk.println("The variable is assumed to be between 4 and 20 inclusive.");
	chalk.println("Five will be used in this example.");
	var n=5;
	square(n);
}

function square(n)
{
	for(var i=0; i < n; i++)
	{
		for(var j=0; j < n; j++)
		{
			if(i==0)
			{
			chalk.print("*");
			}
			else if(i== n-1)
			{
			chalk.print("*");
			}
			else if(j==0)
			{
			chalk.print("*");
			}
			else if(j==n-1)
			{
			chalk.print("*");
			}
			else
			{
			chalk.print(" ");
			}
		}
		chalk.newline();

	}
}