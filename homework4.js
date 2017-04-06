

function Ghost(color, x, y) {
  this.color = color;
  this.x = x%16;//accounts for wrap around
  this.y = y%16;//accounts for wrap around
}

Ghost.prototype.up = function(num) {
    var temp = num + this.y;
    this.y = temp%16;//accounts for wrap around
    temp = 0;
};

Ghost.prototype.down = function(num) {
    var temp2 = this.y - num;
    if (temp2 < 0)
        {
            temp2 = temp2 +16;//deals with negative directions
        }
    this.y = temp2%16;//accounts for wrap around
    temp2 = 0;
};

Ghost.prototype.left = function(num) {
    var temp3 = this.x - num;
        if (temp3 < 0)
        {
            temp3 = temp3 +16;//deals with negative directions
        }
    this.x = temp3%16;//accounts for wrap around
    temp3 = 0;
};

Ghost.prototype.right = function(num) {
    var temp4 = num + this.x;
    this.x = temp4%16;//accounts for wrap around
    temp4 = 0;
};

Ghost.prototype.toString = function(){
    console.log ( "The "+ this.color + " ghost is at x=" + this.x + " and y=" + this.y + ".");   
};


main = function() {
	
	chalk.println('Dylan Herrig');
	chalk.println('EECS 368 HW4');
	chalk.println('----------------------');
    
    /* Coordinate System Defined as 
        
        (0,15), (1,15) , (2,15) ,(3,15), ....  (15,15)
           .                                    .
           .                                    .
           .                                    .
    
        (0,0) , (1,0) , (2,0) ,(3,0), ....  (15,0)
    
    */
    
	
}

