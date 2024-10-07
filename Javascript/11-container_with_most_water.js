/* 
Problem 11. Container With Most Water

Given n non-negative integers a1, a2, ..., an , where each represents a point 
at coordinate (i, ai). n vertical lines are drawn such that the two endpoints 
of the line i is at (i, ai) and (i, 0). Find two lines, which, together with 
the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
*/

var maxArea = function(height) {
    //two pointer approach
    let it1 = 0, it2 = height.length - 1, ans = 0;
    while(it1 < it2){
        //update ans if minimum of the heights at two pointers
        //multiplied by the length between two pointers is greater
        ans = Math.max(ans, Math.min(height[it1], height[it2]) * (it2 - it1));
        if(height[it1] < height[it2]){
            //update pointer 1
            it1++;
        }
        else{
            //update pointer 2
            it2--;
        }
    }
    return ans;
};

/* 
Sample input : [4,3,2,1,4]
Sample output : 16


Time Complexity : O(n), linear time
Space Complexity : O(1), constant space
*/