/*Link Of Question : https://leetcode.com/problems/house-robber/
198. House Robber
ou are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.*/
// Solution :

var rob = function(nums) {
    let n = nums.length;

    if (!n) return 0;
    if (n < 2) return nums[0];

    nums[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++)
        nums[i] = Math.max(nums[i] + nums[i - 2], nums[i - 1]);

    return nums[n - 1];
};

/*
Sample Input : nums = [1,2,3,1]
Sample output : 4
Time Complexity : O(N)
Space Complexity : O(1)
N = size of given array
*/