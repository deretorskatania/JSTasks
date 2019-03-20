//Task 1
function chooseBigger(a, b){
	if(a>b) {		
		return a;
	}
	else {		
		return b;
	}
}
console.log(chooseBigger(1, 2));

//Task 2.1
function findMax(myArray){
	var max=myArray[0];
	for (var i = 1; i < myArray.length; i++){
		if (myArray[i] >max){
			max = myArray[i];
		}
		
	}
	return max;
}
var someArray = [12, 30, 1, -2, 0, 26, 84, -40, 52, -64];
console.log(findMax(someArray));

//Task 2.2
function findMin(myArray){
	var min=myArray[0];
	for (var i = 1; i < myArray.length; i++){
		if (myArray[i] < min){
			min = myArray[i];
		}
		
	}
	return min;
}
var someArray = [12, 30, 1, -2, 0, 26, 84, -40, 52, -64];
console.log(findMin(someArray));

//Task 3
function filterArray(myArray, minVal, maxVal){
	var arr = [];	
	for (var i = 0; i < myArray.length; i++){
		const el=myArray[i];
		if ((el > minVal)&&(el < maxVal)){
			arr.push(el);
		}
		
	}
	return arr;
}

var someArray = [12, 30, 1, -2, 0, 26, 84, -40, 52, -64];
console.log(filterArray(someArray, 0,50))

//Task 4
function wordsCounter(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  str = str.replace(/[ ]{2,}/gi," ");  
  str=str.trim();
  return str.split(" ").length;	 
}
var arr = 'Hello   sfd  ';


console.log(wordsCounter(arr));

//Task 5
var calculator = {
	sum: function(x, y){return x+y;},
	sub: function(x, y){return x-y;},
	mult: function(x, y){return x*y;},
	div: function(x, y){return x/y;}	
	
};
var x=4;
var y=10;
console.log(calculator.sub(calculator.sum(x, calculator.mult(x, 5)), calculator.div(y, 2)));

//Task 6
function findWords(str, arr){	
	var k=0;
	var pos=0;
	var i;	
	var obj = [];
	var n=[];
	str = str.toLowerCase();
	str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	str = str.replace(/[ ]{2,}/gi," ");	
	n = str.split(' '); 
	for(i=0; i<arr.length; i++){
		k=0;
		for(pos=0; pos<str.length; pos++){
			if(n[pos] === arr[i])
		k++;
		}	
		obj[i] = {
		name : arr[i],
		count : k
	};
	}
	return obj;
}
var str = "In many countries there is a pecking order to the universities, with a few high-status institutions at the top, turning out an intellectual elite and attracting the best minds in teaching and research.";
var arr = ["in" , "the", "universities"];
var result = findWords(str,arr);
for(i=0; i<result.length; i++)
console.log(result[i].name + " " +result[i].count);

//Task 7
function isOdd(n){
	this.n = n;
	this.isodd = function() {return this.n%2!=0;}	
}

function oddOrEven(array){
	var	arr = [];
	for(i=0; i<array.length; i++){
		arr[i] = new isOdd(array[i]);		
	}
	return arr;	
}
var someArray = [12, 30, 1, -2, 10, 26, 87, -40, 51, -64];
var result = (oddOrEven(someArray));
for(i=0; i<result.length; i++)
console.log(result[i].n + " " +result[i].isodd());
















