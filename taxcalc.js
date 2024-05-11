var salary = parseFloat(window.prompt("Please enter salary:"));
if (salary == null || isNaN(salary)) {
	alert("Please enter correct value!");
}
console.log("salary:"+salary);
var slab;
	
var tax=0;
if (salary > 250000 && salary <= 500000) slab= 1;
else if (salary > 500000  && salary <= 1000000) slab= 2;
else if (salary > 1000000) slab= 3;
else {
	tax = "Great, no tax!"
}	

switch(slab){		
	case 1:
		tax = (salary - 250000)*0.05; 				// apply 5% on taxable salary
		console.log("slab1 tax:"+ tax);
		break;
		
	case 2:
		tax = (salary - 500000)*0.20 + (250000*0.05);				// apply 20% on amount greater than 500000 and 5% on (500000-250000)
		console.log("slab2 tax:"+ tax);
		break;
		
	case 3:
		tax = (salary - 1000000)*0.30 + (500000*0.20) + (250000*0.05);				// apply 30% on on amount greater than 1000000, 20% on (1000000-500000) 5% on (500000-250000)
		console.log("slab3 tax:"+ tax);
		break;
		
	default:
		console.log("Something wrong here!");
	}

alert ("Tax: "+tax);