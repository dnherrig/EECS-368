
main = function() {
	
	chalk.println('Dylan Herrig');
	chalk.println('EECS 368 HW3');
	chalk.println('----------------------');
		
	var a = [[1,2,3],[9,5,[8,7]]];
	
	chalk.println(a.toString());
	
	a = flatten(a);
	
	chalk.println(a.toString());
	
}


//adapted from http://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript

function flatten(arr) {
  return arr.reduce(function (flattened, nextToFlatten) 
  {
	return flattened.concat(Array.isArray(nextToFlatten) ? flatten(nextToFlatten) : nextToFlatten);
  }, []);
}

function display(m) {
  for (var r = 0; r < m.length; ++r) {
    chalk.println(m[r].join(' '));
  }
}

