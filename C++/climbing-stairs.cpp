int climbingStairs(int n)
{
    if (n == 0 || n == 1)
        return 1;
    int ans = 0;
    ans += climbingStairs(n - 1) + climbingStairs(n - 2);
    return ans;
}

/*solution of leetcode question 70: climbing stairs*/