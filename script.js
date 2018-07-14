/*
function chooseJob(job1,job2){
	if (job1 > job2) {
		console.log("Job 1 has the higher salary:" + job1);
	}else{
		console.log("Job 2 has the higher salary:" + job2);
	}
}

chooseJob(196,1000);
*/


/*
function sign(num){
	if (num > 0) {
		console.log("1")
	}else if(num === 0){
		console.log("0")
	}else{
		console.log("-1")
	}
}

sign(-2)
*/



/*
function trafficMessage(color){  //color = "red"
	
	if (color === "red") {
		console.log("Vehicles must stop")
	}else if (color === "green") {
		console.log("Vehicles can move")
	}else{
		console.log("Vehicles should get ready to move ")
	}
}
trafficMessage("red");
*/


/*
function isEven(num){
	if (num%2 === 0) {
		console.log("True")
	}else{
		console.log("False")
	}
}
isEven(7);
*/



/*
function salePrice(numb1,numb2){
	
	
	// if (numb1 * numb2 / 100) {
	// 	console.log("The sale price is " + (numb1-numb2));
	// }

	// 				OR
	

	let discount = (numb1 * numb2) / 100;
	console.log("Discount rate " + discount);
	console.log("The sale price is = " + (numb1-discount));
}
salePrice(100,10);
*/


/*
function breakdown(number){

	console.log(number[0] + " thousands");
	console.log(number[1] + " hundreds");
	console.log(number[2] + " tens");
	console.log(number[3] + " units");

}

breakdown("9876");
*/



/*
function ageFromDob(numb1,numb2){
	let dob = numb2 - numb1
	console.log(dob)
}
ageFromDob(1983,2017);
*/

/*
function setValue(numb1,numb2){

}
setValue();

function add(numb1,numb2){
	setValue();
	console.log(numb1 + numb2)
}
add(2,4);


function add(numb1,numb2){
	setValue();
	console.log(numb1 - numb2)
}
add(6,4);
*/



/*
function sub(a,b)
{
	return a-b;
}


function add(a,b)
{
	return a+b;
}

function operate(a,b,func)
{

	if(func === "add"){
		console.log(add(a,b));

	}
	else if(func === "sub")
	{
		console.log(sub(a,b));
	}

}

operate(4,2,"add");
*/

/*
function bodyTemp(f){
	let temp = (f - 32) * 5/9;
	console.log(temp);
	if(temp < 37){
		console.log(37-temp);
	}else{
		console.log(temp - 37)
	}
}
bodyTemp(50);

*/