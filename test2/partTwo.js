const ourAsyncFunc = () => {
	console.log("1. We are Borg");
	setTimeout(() => {
		console.log("2. You will be assimilated!");
	}, 2000);
	console.log("3. Resistance is futile!");
}


ourAsyncFunc();




// Do not edit below this line
/* 
	* When you run this code, you will see the following printed:
		1. We are Borg
		3. Resistance is futile!
		2. You will be assimilated!

	* Keeping the sequence of the console.log in the same order, you must print the following in order
		1. We are Borg
		2. You will be assimilated!
		3. Resistance is futile!

	Note: JavaScript has multiple ways to make async code synchronous, you must use any of the following ways available and make the above code synchronous.
 */