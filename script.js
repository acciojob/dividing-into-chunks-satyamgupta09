const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum=0;
	let ans=[];
	let curr=[];

	for(let i=0;i<arr.length;i++){
		if(sum+arr[i]<=n){
			curr.push(arr[i]);
			sum+=arr[i];
		}
		else{
			ans.push(curr);
			sum=arr[i];
			curr=[arr[i]];
		}
	}
	return ans;
};

// const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
