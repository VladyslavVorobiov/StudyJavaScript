
function sumInput(arrayNumbers){

	let sum = 0;

	for (let i of arrayNumbers) {
		sum +=i; 
	}

return sum;
}


// Найти непрерывный подмассив в заданном массиве, сумма элементов в котором максимальна
// Если все элементы отрицательные – ничего не берём (подмассив пустой) и сумма равна «0»

function getMaxSubSum (arrayNumbers){

	let subArray = [];
	let MaxSubSumArray = [arrayNumbers[0]]; //default
	let maxSum = 0;
	let indexArray = 0;
	
	
	//step 1 : check all numbers < 0 ?
		let quantityNegative = 0;
		for(let i of arrayNumbers){
			if (i < 0) quantityNegative++;
		}

		if (quantityNegative === arrayNumbers.length){
			return {MaxSubSumArray:[] ,maxSum};
		}

	//step 2: find sub Array with max sum

	subArray.push(arrayNumbers[indexArray]);
	maxSum = subArray[indexArray];
	

	while(true){
		

		for(let i = indexArray + 1; i < arrayNumbers.length; i++){

			subArray.push(arrayNumbers[i]);
			let sumElementsArray = sumInput(subArray);

			if ( sumElementsArray > maxSum){
				maxSum = sumElementsArray;
				MaxSubSumArray = subArray.slice(0);
			}
		}

		indexArray++;
		if (indexArray == arrayNumbers.length){
			
			if ( arrayNumbers[indexArray-1] > maxSum){
				maxSum = arrayNumbers[indexArray-1];
				MaxSubSumArray.length = 0; // clear Max Sub Sum Array
				MaxSubSumArray.push(arrayNumbers[indexArray-1]);
			}

			break;
		} 

		subArray.length = 0; // clear subArray
		subArray.push(arrayNumbers[indexArray]);

		if ( subArray[0] > maxSum){
				maxSum = subArray[0];
				MaxSubSumArray.length = 0; // clear Max Sub Sum Array
				MaxSubSumArray.push(subArray[0]);
			}
	    
	}

return { MaxSubSumArray, maxSum };

}

 let b = getMaxSubSum([-1, 2, 3, -9]);
 alert (`Input: ${[-1, 2, 3, -9]} \n sub Array: ${b.MaxSubSumArray} \n max sum: ${b.maxSum}`);

b = getMaxSubSum([2, -1, 2, 3, -9]) ;
alert (`Input: ${[2, -1, 2, 3, -9]} \n sub Array: ${b.MaxSubSumArray} \n max sum: ${b.maxSum}`);

b = getMaxSubSum([-1, 2, 3, -9, 11]) ;
alert (`Input: ${[-1, 2, 3, -9, 11]} \n sub Array: ${b.MaxSubSumArray} \n max sum: ${b.maxSum}`);

b = getMaxSubSum([-2, -1, 1, 2]);
alert (`Input: ${[-2, -1, 1, 2]} \n sub Array: ${b.MaxSubSumArray} \n max sum: ${b.maxSum}`);

b = getMaxSubSum([100, -9, 2, -3, 5]) ;
alert (`Input: ${[100, -9, 2, -3, 5]} \n sub Array: ${b.MaxSubSumArray} \n max sum: ${b.maxSum}`);

b = getMaxSubSum([1, 2, 3]) ;
alert (`Input: ${[1, 2, 3]} \n sub Array: ${b.MaxSubSumArray} \n max sum: ${b.maxSum}`);

b = getMaxSubSum([-1, -2, -3, -5, -6, -6]) ;
alert (`Input: ${[-1, -2, -3, -5, -6, -6]} \n sub Array: ${b.MaxSubSumArray} \n max sum: ${b.maxSum}`);

b = getMaxSubSum([-2, 1, -3, -4, 11, 12, -1, 25, -4]) ;
alert (`Input: ${[-2, 1, -3, -4, 11, 12, -1, 25, -4]} \n sub Array: ${b.MaxSubSumArray} \n max sum: ${b.maxSum}`);
