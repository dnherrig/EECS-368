
main = function() {
	
	chalk.println('Dylan Herrig');
	chalk.println('EECS 368 HW2');
	chalk.println('----------------------');
	
	var a = [[1, 2, 3], [4, 6, 8], [4, 6, 8]];
    var b = [[8,3], [2, 4], [3, 6]];
	
	if((Array.isArray(a))&& (Array.isArray(b)))//checks to see that both arguments are arrays
	{
		
		if( a.length == b[0].length)//checks to see if the a matricies are compatable
		{
			chalk.println('Matrix A');
			display(a);
			chalk.println('----------------------');
			chalk.println('Matrix B');
			display(b);
			chalk.println('----------------------');
			chalk.println('Matrix A * Matrix B');
			display(mm(a, b));
		}
		else
		{
			chalk.println('An error was thrown check your console for more information.');
			throw new Error('These matricies are incompatable');
		}
	
	}
	else//decidies which argument is invalid
	{
		if((Array.isArray(a) == false) && (Array.isArray(b) == false))
		{
			chalk.println('An error was thrown check your console for more information.');
			throw new Error('Both arguments are not arrays');
		}
		else if(Array.isArray(a) == false)
		{
			chalk.println('An error was thrown check your console for more information.');
			throw new Error('First argument is not an array');
		}
		else
		{
			chalk.println('An error was thrown check your console for more information.');
			throw new Error('Second argument is not an array');
		}
	}
	
	
}


//adapted from http://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript

function mm(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
	  
	 
  for (var r = 0; r < aNumRows; ++r) 
  {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  
  return m;
}

function display(m) {
  for (var r = 0; r < m.length; ++r) {
    chalk.println(m[r].join(' '));
  }
}



