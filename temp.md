{
"text": "Implementation of Two Sum in JavaScript with detailed explanation and considerations for efficiency and error
handling.",
"code": {
"twoSum": {
"file": {
"contents":"/**\n 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that
they add up to target.\n
 * You may assume that each input would have exactly one solution, and you may not use the same
element twice.\n 
* You can return the answer in any order.\n *\n 
* Example 1:\n
 * Input: nums = [2,7,11,15], target =9\n 
* Output: [0,1]\n 
* Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n *\n 
* Example 2:\n
 * Input:
nums = [3,2,4], target = 6\n *
 Output: [1,2]\n *\n
  * Example 3:\n 
  * Input: nums = [3,3], target = 6\n 
  * Output: [0,1]\n*\n 
* Constraints:\n 
* 2 <= nums.length <=104\n 
* -109 <=nums[i] <=109\n
 * -109 <=target <=109\n 
 * Only one valid answer
    exists.\n */\nconst twoSum=(nums, target)=> {\n //Error Handling for invalid inputs\n if (!Array.isArray(nums) ||
    nums.length < 2) {\n throw new Error('Invalid input: nums must be an array with at least two elements.');\n }\n if
        (typeof target !=='number' ) {\n throw new Error('Invalid input: target must be a number.');\n }\n\n //Using a
        Map for efficient lookup\n const numMap=new Map();\n\n for (let i=0; i < nums.length; i++) {\n const
        complement=target - nums[i];\n if (numMap.has(complement)) {\n return [numMap.get(complement), i];\n }\n
        numMap.set(nums[i], i);\n }\n\n //No solution found\n throw new Error('No two numbers add up to the
        target.');\n};\n\nmodule.exports=twoSum;\n" } }, "test" : { "file" : { "contents"
        : "const twoSum = require('./twoSum');\n\ntest('twoSum should return correct indices for Example 1', () => {\n  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);\n});\ntest('twoSum should return correct indices for Example 2', () => {\n  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);\n});\ntest('twoSum should return correct indices for Example 3', () => {\n  expect(twoSum([3, 3], 6)).toEqual([0, 1]);\n});\ntest('twoSum should throw an error for invalid input', () => {\n  expect(() => twoSum([1], 2)).toThrow('Invalid input: nums must be an array with at least two elements.');\n});\ntest('twoSum should throw an error if no solution exists', () => {\n  expect(() => twoSum([1, 2, 3], 10)).toThrow('No two numbers add up to the target.');\n});"
        } } }, "buildCommand" : { "mainItem" : "npm" , "commands" : [ "install" , "jest" ] }, "testCommand" :
        { "mainItem" : "npm" , "commands" : [ "test" ] } }