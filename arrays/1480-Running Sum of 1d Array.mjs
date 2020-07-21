let runningSum = function(nums) {
  let result = [];
  let currentSum = 0;
  for(let i=0; i < nums.length; i++){
    result.push(currentSum += nums[i]);
  }
  return result
};

runningSum([1, 2, 3, 4])