const arr = [1, 2, 3, 4, 1, 0, 2, 2];

// const divide = (arr, n) => {
//   // Write your code here
// 	let sum=0;
// 	let ans=[];
// 	let curr=[];

// 	for(let i=0;i<arr.length;i++){
// 		if(sum+arr[i]<=n){
// 			curr.push(arr[i]);
// 			sum+=arr[i];
// 		}
// 		else{
// 			ans.push(curr);
// 			sum=arr[i];
// 			curr=[arr[i]];
// 		}
// 	}
// 	ans.push(curr);
// 	return ans;
// };
const divide = (arr, n) => {
  let sum = 0; // Tracks the sum of the current subarray
  let ans = []; // Stores the final list of subarrays
  let curr = []; // Stores the current subarray

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] <= n) {
      curr.push(arr[i]); // Add element to the current subarray
      sum += arr[i]; // Update the sum
    } else {
      ans.push(curr); // Push the current subarray to the result
      sum = arr[i]; // Reset the sum to the current element
      curr = [arr[i]]; // Start a new subarray
    }
  }

  // Push the last subarray
  ans.push(curr);

  return ans;
};

// const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
